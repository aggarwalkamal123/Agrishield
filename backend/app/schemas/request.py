from pydantic import BaseModel
from typing import Dict, Literal


class AssessmentRequest(BaseModel):

    crop: str

    soil_texture: Literal[
        "Sand",
        "Silt",
        "Clay"
    ]

    soil_ph: float

    organic_matter: float

    heavy_metals: Dict[str, float]