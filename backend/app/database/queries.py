from app.database.database import SessionLocal
from sqlalchemy import or_, and_
from app.database.models import (
    HeavyMetal,
    BackgroundConcentration,
    WHOLimit,
    CropBAF,
    ExposureParameter,
    ToxicResponseFactor,
    FoodSafetyClassification,
    IndexClassification,
)

db = SessionLocal()


# ==========================================================
# HEAVY METAL
# ==========================================================

def get_heavy_metal(symbol: str):
    return db.query(HeavyMetal).filter(
        HeavyMetal.symbol == symbol
    ).first()


def get_all_heavy_metals():
    return db.query(HeavyMetal).all()


# ==========================================================
# BACKGROUND CONCENTRATION
# ==========================================================

def get_background(symbol: str):

    metal = get_heavy_metal(symbol)

    if metal is None:
        return None

    result = db.query(
        BackgroundConcentration
    ).filter(
        BackgroundConcentration.metal_id == metal.id
    ).first()

    return result.background_concentration if result else None


# ==========================================================
# WHO LIMIT
# ==========================================================

def get_who_limit(symbol: str):

    metal = get_heavy_metal(symbol)

    if metal is None:
        return None

    result = db.query(
        WHOLimit
    ).filter(
        WHOLimit.metal_id == metal.id
    ).first()

    return result.permissible_limit if result else None


# ==========================================================
# BIOACCUMULATION FACTOR
# ==========================================================

def get_baf(crop: str, symbol: str):

    metal = get_heavy_metal(symbol)

    if metal is None:
        return None

    result = db.query(
        CropBAF
    ).filter(
        CropBAF.crop_name == crop,
        CropBAF.metal_id == metal.id
    ).first()

    return result.bioaccumulation_factor if result else None


# ==========================================================
# RfD
# ==========================================================

def get_rfd(symbol: str):

    metal = get_heavy_metal(symbol)

    if metal:
        return metal.oral_rfd

    return None


# ==========================================================
# HAKANSON Tr
# ==========================================================

def get_tr(symbol: str):

    metal = get_heavy_metal(symbol)

    if metal is None:
        return None

    result = db.query(
        ToxicResponseFactor
    ).filter(
        ToxicResponseFactor.metal_id == metal.id
    ).first()

    return result.toxic_response_factor if result else None


# ==========================================================
# EXPOSURE PARAMETERS
# ==========================================================

def get_exposure(consumer_type: str):

    result = db.query(
        ExposureParameter
    ).filter(
        ExposureParameter.consumer_type == consumer_type
    ).first()

    return result


# ==========================================================
# INDEX CLASSIFICATION
# ==========================================================

def get_index_label(index_name: str, value: float):

    result = (
        db.query(IndexClassification)
        .filter(
            IndexClassification.index_name == index_name,
            IndexClassification.lower_limit <= value,
            IndexClassification.upper_limit > value,
        )
        .first()
    )

    if result:
        return result.standard_label

    print("----------------------")
    print(index_name)
    print(value)
    print("NOT FOUND")
    print("----------------------")

    return "Unknown"


# ==========================================================
# Food Safety Calssification
# ==========================================================

def get_food_safety_label(value):

    result = (
        db.query(FoodSafetyClassification)
        .filter(
            FoodSafetyClassification.lower_limit <= value,
            FoodSafetyClassification.upper_limit > value,
        )
        .first()
    )

    if result:
        return result.label

    return "Unknown"