"""
Bioavailability Estimator
-------------------------
"""

from app.schemas.response import BioavailabilityResponse


def estimate_bioavailability(
    ph: float,
    organic_matter: float,
    texture: str
) -> BioavailabilityResponse:

    # -----------------------------
    # pH Category
    # -----------------------------

    if ph < 6.5:
        ph_category = "Acidic"
        ph_score = 3

    elif ph <= 7.5:
        ph_category = "Neutral"
        ph_score = 2

    else:
        ph_category = "Alkaline"
        ph_score = 1

    # -----------------------------
    # Organic Matter
    # -----------------------------

    if organic_matter < 2:
        om_score = 3

    elif organic_matter < 4:
        om_score = 2

    elif organic_matter <= 6:
        om_score = 1

    else:
        om_score = 2

    # -----------------------------
    # Soil Texture
    # -----------------------------

    texture = texture.lower()

    if texture == "sand":
        texture_score = 3

    elif texture == "silt":
        texture_score = 2

    elif texture == "clay":
        texture_score = 1

    else:
        raise ValueError("Invalid soil texture")

    # -----------------------------
    # Final Score
    # -----------------------------

    total_score = ph_score + om_score + texture_score

    if total_score >= 8:
        label = "High"
        score = 3

    elif total_score >= 5:
        label = "Medium"
        score = 2

    else:
        label = "Low"
        score = 1
        
    reason = (
        f"{ph_category} soil, "
        f"{texture.capitalize()} texture "
        f"and {organic_matter}% organic matter "
        f"indicate {label.lower()} heavy metal bioavailability."
    )

    return BioavailabilityResponse(

        label=label,

        score=score,

        ph_category=ph_category,

        reason=reason

    )