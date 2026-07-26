from typing import List, Dict, Any

from pydantic import BaseModel


# ==========================================================
# Bioavailability
# ==========================================================

class BioavailabilityResponse(BaseModel):

    label: str

    score: int

    ph_category: str

    reason: str


# ==========================================================
# Soil Properties Card
# ==========================================================

class SoilPropertiesResponse(BaseModel):

    soil_ph: float

    ph_category: str

    organic_matter: float

    soil_texture: str


# ==========================================================
# Heavy Metal Table
# ==========================================================

class MetalResult(BaseModel):

    metal: str

    soil_concentration: float

    who_limit: float

    status: str

    cf: float | None = None

    igeo: float | None = None

    ef: float | None = None

    er: float | None = None

    adult_hq: float | None = None

    child_hq: float | None = None


# ==========================================================
# Index Table
# ==========================================================

class IndexResult(BaseModel):

    index: str

    value: float

    label: str

    description: str | None = None


# ==========================================================
# Overall Cards
# ==========================================================

class OverallCards(BaseModel):

    soil_pollution: str

    food_safety: str

    adult_health: str

    child_health: str

    economic_impact: str

    overall_risk: str


# ==========================================================
# Final API Response
# ==========================================================

class AnalyzeResponse(BaseModel):

    crop: str

    soil_properties: SoilPropertiesResponse

    bioavailability: BioavailabilityResponse

    metal_table: List[MetalResult]

    index_table: List[IndexResult]

    overall_cards: OverallCards

    assessment_summary: str

    charts: Dict[str, Any]

    recommendations: List[str] = []