from fastapi import APIRouter
from app.schemas.assessment import AssessmentRequest

router = APIRouter()


@router.post("/")
def calculate(data: AssessmentRequest):

    return {
        "message": "Assessment endpoint working",
        "received_data": data
    }