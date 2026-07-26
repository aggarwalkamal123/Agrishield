from fastapi import APIRouter
from app.schemas.assessment import AssessmentInput

router = APIRouter()


@router.post("/")
def calculate(data: AssessmentInput):

    return {
        "message": "Assessment endpoint working",
        "received_data": data
    }