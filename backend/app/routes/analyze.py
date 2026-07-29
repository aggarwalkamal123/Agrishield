from fastapi import APIRouter, HTTPException

from app.schemas.request import AssessmentRequest

from app.services.bioavailability import estimate_bioavailability
from app.services.calculator import calculate_indices
from app.services.decision_engine import build_decision_report
from app.schemas.response import AnalyzeResponse
from app.ai.prompt_builder import build_prompt
from app.ai.gemini_service import get_ai_response
from app.services.charts_builder import build_charts
from fastapi.responses import Response
from fastapi import Body
from app.services.pdf_generator import generate_pdf

router = APIRouter()


@router.post(
    "/analyze",
    response_model=AnalyzeResponse
)
def analyze_soil(request: AssessmentRequest):

    # -------------------------------------------------
    # Step 1 : Estimate Bioavailability
    # -------------------------------------------------

    bioavailability = estimate_bioavailability(

        ph=request.soil_ph,

        organic_matter=request.organic_matter,

        texture=request.soil_texture

    )

    # -------------------------------------------------
    # Step 2 : Calculate Indices
    # -------------------------------------------------

    calculation_result = calculate_indices(

        heavy_metals=request.heavy_metals,

        crop=request.crop

    )

    # -------------------------------------------------
    # Step 3 : Decision Engine
    # -------------------------------------------------

    final_report = build_decision_report(

        crop=request.crop,

        soil_ph=request.soil_ph,

        organic_matter=request.organic_matter,

        soil_texture=request.soil_texture,

        bioavailability=bioavailability,

        calculation_result=calculation_result

    )
    
    try:

        prompt = build_prompt(final_report)

        ai_result = get_ai_response(prompt)

        final_report["assessment_summary"] = ai_result["summary"]

        final_report["recommendations"] = ai_result["recommendations"]

        for item in final_report["index_table"]:

            item["description"] = ai_result["descriptions"].get(
            item["index"],
            ""
        )

    except Exception as e:

        print("Gemini unavailable:", e)

        final_report["assessment_summary"] = (
            "The assessment was successfully completed using the analytical "
            "engine. AI-generated interpretation is temporarily unavailable."
        )

        final_report["recommendations"] = [

            "Monitor heavy metal concentrations regularly.",

            "Maintain proper soil pH and organic matter.",

            "Avoid cultivation if contamination exceeds permissible limits.",

            "Follow recommended remediation techniques.",
            
        ]

        for item in final_report["index_table"]:

            item["description"] = ""
        
    # --------------------------------------------------
    # Charts
    # --------------------------------------------------

    try:

        final_report["charts"] = build_charts(

        calculation_result["metal_results"],

        calculation_result["overall_indices"],

        final_report["index_table"],

        final_report["overall_cards"]

    )

    except Exception as e:

        print("Chart generation failed:", e)

        final_report["charts"] = {}
        
        
    return final_report


@router.post("/report")
def download_report(data: dict = Body(...)):

    pdf = generate_pdf(data)

    return Response(
        content=pdf,
        media_type="application/pdf",
        headers={
            "Content-Disposition":
            "attachment; filename=Soil_Assessment_Report.pdf"
        },
    )