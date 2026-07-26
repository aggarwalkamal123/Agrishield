from app.database.queries import (
    get_index_label,
    get_food_safety_label
)


# ==========================================================
# SOIL POLLUTION LABEL
# Priority:
# PLI > NPI
# ==========================================================

def get_soil_pollution_label(pli, npi):

    if pli > 1:
        return get_index_label(
            "Pollution Load Index",
            pli
        )

    return get_index_label(
        "Nemerow Pollution Index",
        npi
    )


# ==========================================================
# HEALTH RISK LABEL
# Based on HI
# ==========================================================

def get_health_label(hi):

    return get_index_label(
        "Health Index",
        hi
    )


# ==========================================================
# FOOD SAFETY LABEL
# ==========================================================

def get_food_label(fsi):

    return get_food_safety_label(
        fsi
    )


# ==========================================================
# ECONOMIC IMPACT
# Derived from Overall Risk
# ==========================================================

def get_economic_label(overall):

    mapping = {

        "Safe":
            "Negligible",

        "Low":
            "Low",

        "Moderate":
            "Moderate",

        "High":
            "High",

        "Very High":
            "Very High"

    }

    return mapping.get(
        overall,
        "Unknown"
    )


# ==========================================================
# OVERALL RISK
# ==========================================================

def get_overall_risk(

        soil,

        food,

        health,

        bioavailability_score

):

    risk_score = 0

    # -----------------------------
    # Soil Pollution
    # -----------------------------

    if "Very" in soil or "Seriously" in soil:

        risk_score += 3

    elif "High" in soil:

        risk_score += 2

    elif "Moderate" in soil:

        risk_score += 1

    # -----------------------------
    # Food Safety
    # -----------------------------

    if food == "Unsafe":

        risk_score += 3

    elif "High" in food:

        risk_score += 2

    elif "Moderately" in food:

        risk_score += 1

    # -----------------------------
    # Health
    # -----------------------------

    if "Potential" in health:

        risk_score += 3

    # -----------------------------
    # Bioavailability
    # -----------------------------

    risk_score += bioavailability_score

    # -----------------------------
    # Final
    # -----------------------------

    if risk_score >= 10:

        return "Very High"

    elif risk_score >= 7:

        return "High"

    elif risk_score >= 4:

        return "Moderate"

    elif risk_score >= 2:

        return "Low"

    return "Safe"


# ==========================================================
# BUILD DECISION REPORT
# ==========================================================

def build_decision_report(

    crop,
    soil_ph,
    organic_matter,
    soil_texture,
    bioavailability,
    calculation_result

):

    overall = calculation_result["overall_indices"]

    metal_results = calculation_result["metal_results"]

    # ------------------------------------------------------
    # Overall Labels
    # ------------------------------------------------------

    soil_label = get_soil_pollution_label(

        overall["pli"],
        overall["npi"]

    )

    food_label = get_food_label(

        overall["food_safety_index"]

    )

    adult_health = get_health_label(

        overall["adult_hi"]

    )

    child_health = get_health_label(

        overall["child_hi"]

    )

    overall_label = get_overall_risk(

        soil_label,
        food_label,
        adult_health,
        bioavailability.score

    )

    economic = get_economic_label(

        overall_label

    )

    # ------------------------------------------------------
    # Heavy Metal Table
    # ------------------------------------------------------

    metal_table = []

    for metal in metal_results:

        ratio = (
            metal["soil_concentration"]
            /
            metal["who_limit"]
            if metal["who_limit"] > 0
            else 0
        )

        if ratio <= 1:

            status = "Safe"

        else:

            status = "Exceeds WHO limit"

        metal_table.append({

            "metal": metal["metal"],

            "soil_concentration": metal["soil_concentration"],

            "who_limit": metal["who_limit"],

            "status": status,
            
            "cf": metal["cf"],

            "igeo": metal["igeo"],

            "ef": metal["ef"],

            "er": metal["er"],

            "adult_hq": metal["adult_hq"],

            "child_hq": metal["child_hq"]

        })

    # ------------------------------------------------------
    # Index Table
    # ------------------------------------------------------

    index_table = [

        {
            "index": "PLI",
            "value": overall["pli"],
            "label": soil_label
        },

        {
            "index": "NPI",
            "value": overall["npi"],
            "label": get_index_label(
                "Nemerow Pollution Index",
                overall["npi"]
            )
        },

        {
            "index": "PERI",
            "value": overall["peri"],
            "label": get_index_label(
                "Potential Ecological Risk Index",
                overall["peri"]
            )
        },

        {
            "index": "Adult HI",
            "value": overall["adult_hi"],
            "label": adult_health
        },

        {
            "index": "Child HI",
            "value": overall["child_hi"],
            "label": child_health
        },

        {
            "index": "Food Safety Index",
            "value": overall["food_safety_index"],
            "label": food_label
        }

    ]

    # ------------------------------------------------------
    # Final Response
    # ------------------------------------------------------

    return {

        # ------------------------------------------
        # Crop
        # ------------------------------------------

        "crop": crop,

        # ------------------------------------------
        # Soil Properties Card
        # ------------------------------------------

        "soil_properties": {

            "soil_ph": soil_ph,

            "ph_category": bioavailability.ph_category,

            "organic_matter": organic_matter,

            "soil_texture": soil_texture

        },

        # ------------------------------------------
        # Bioavailability Card
        # ------------------------------------------

        "bioavailability": {
        "label": bioavailability.label,
        "score": bioavailability.score,
        "ph_category": bioavailability.ph_category,
        "reason": bioavailability.reason,
        },

        # ------------------------------------------
        # Heavy Metal Table
        # ------------------------------------------

        "metal_table": metal_table,

        # ------------------------------------------
        # Index Table
        # ------------------------------------------

        "index_table": index_table,

        # ------------------------------------------
        # Overall Cards
        # ------------------------------------------

        "overall_cards": {

            "soil_pollution": soil_label,

            "food_safety": food_label,

            "adult_health": adult_health,

            "child_health": child_health,

            "economic_impact": economic,

            "overall_risk": overall_label

        },
        
        # placeholders
        "assessment_summary": "",

        "charts": {},

        "recommendations": []
    }