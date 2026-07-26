from pydantic import BaseModel, Field
from typing import List, Literal


class HeavyMetal(BaseModel):
    metal: str
    concentration: float = Field(..., gt=0)


class AssessmentRequest(BaseModel):
    heavy_metals: List[HeavyMetal]

    soil_ph: float = Field(..., ge=0, le=14)

    organic_matter: float = Field(
        ..., ge=0,
        description="Organic Matter (%)"
    )

    soil_texture: Literal[
        "sand",
        "silt",
        "clay"
    ]

    crop: str