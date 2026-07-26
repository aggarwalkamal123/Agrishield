from app.database.database import SessionLocal
from app.database.models import *
import pandas as pd

db = SessionLocal()

# Prevent duplicate insertion
if db.query(HeavyMetal).count() == 0:

    metals = [

        HeavyMetal(
            metal_name="Mercury",
            symbol="Hg",
            atomic_number=80,
            atomic_weight=200.59,
            oral_rfd=0.0001,
            toxicity_score=10,
            carcinogenic="Yes",
            description="Highly toxic heavy metal affecting nervous system."
        ),

        HeavyMetal(
            metal_name="Arsenic",
            symbol="As",
            atomic_number=33,
            atomic_weight=74.92,
            oral_rfd=0.0006,
            toxicity_score=9,
            carcinogenic="Yes",
            description="Highly toxic metalloid associated with cancer."
        ),

        HeavyMetal(
            metal_name="Cadmium",
            symbol="Cd",
            atomic_number=48,
            atomic_weight=112.41,
            oral_rfd=0.070,
            toxicity_score=8,
            carcinogenic="Yes",
            description="Toxic heavy metal causing kidney damage."
        ),

        HeavyMetal(
            metal_name="Lead",
            symbol="Pb",
            atomic_number=82,
            atomic_weight=207.20,
            oral_rfd=0.245,
            toxicity_score=7,
            carcinogenic="Yes",
            description="Neurotoxic heavy metal."
        ),

        HeavyMetal(
            metal_name="Chromium",
            symbol="Cr",
            atomic_number=24,
            atomic_weight=52.00,
            oral_rfd=105.0,
            toxicity_score=6,
            carcinogenic="Yes",
            description="Hexavalent chromium is carcinogenic."
        ),

        HeavyMetal(
            metal_name="Cobalt",
            symbol="Co",
            atomic_number=27,
            atomic_weight=58.93,
            oral_rfd=3.01,
            toxicity_score=5,
            carcinogenic="Yes",
            description="Essential trace element."
        ),

        HeavyMetal(
            metal_name="Nickel",
            symbol="Ni",
            atomic_number=28,
            atomic_weight=58.69,
            oral_rfd=1.40,
            toxicity_score=4,
            carcinogenic="Yes",
            description="Trace metal with carcinogenic compounds."
        ),

        HeavyMetal(
            metal_name="Copper",
            symbol="Cu",
            atomic_number=29,
            atomic_weight=63.55,
            oral_rfd=3.00,
            toxicity_score=3,
            carcinogenic="No",
            description="Essential micronutrient."
        ),

        HeavyMetal(
            metal_name="Zinc",
            symbol="Zn",
            atomic_number=30,
            atomic_weight=65.38,
            oral_rfd=15.0,
            toxicity_score=2,
            carcinogenic="No",
            description="Essential micronutrient."
        ),

        HeavyMetal(
            metal_name="Manganese",
            symbol="Mn",
            atomic_number=25,
            atomic_weight=54.94,
            oral_rfd=2.50,
            toxicity_score=2,
            carcinogenic="No",
            description="Essential micronutrient."
        ),

        HeavyMetal(
            metal_name="Iron",
            symbol="Fe",
            atomic_number=26,
            atomic_weight=55.85,
            oral_rfd=35.0,
            toxicity_score=1,
            carcinogenic="No",
            description="Essential micronutrient."
        )

    ]

    db.add_all(metals)
    db.commit()

    print("Heavy metals inserted successfully!")

else:
    print("Heavy metals already exist.")
    

# ------------------------------
# Background Concentrations
# ------------------------------

if db.query(BackgroundConcentration).count() == 0:

    background_data = [

        BackgroundConcentration(
            metal_id=4,
            background_concentration=20,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=3,
            background_concentration=0.3,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=1,
            background_concentration=0.4,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=2,
            background_concentration=13,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=11,
            background_concentration=47200,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=8,
            background_concentration=45,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=9,
            background_concentration=95,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=5,
            background_concentration=90,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=7,
            background_concentration=68,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=10,
            background_concentration=850,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        ),

        BackgroundConcentration(
            metal_id=6,
            background_concentration=19,
            unit="mg/kg",
            reference_source="Turekian & Wedepohl (1961)"
        )

    ]

    db.add_all(background_data)
    db.commit()

    print("Background concentrations inserted successfully!")

else:
    print("Background concentrations already exist.")
    
    
# ------------------------------
# WHO limits
# ------------------------------
    
    
if db.query(WHOLimit).count() == 0:

    limits = {
        "Pb":85.0,
        "Cd":0.8,
        "Hg":0.05,
        "As":20.0,
        "Fe":50000.0,
        "Cu":36.0,
        "Zn":50.0,
        "Cr":100.0,
        "Ni":35.0,
        "Mn":2000.0,
        "Co":50.0
    }

    for symbol,value in limits.items():

        metal = db.query(HeavyMetal).filter_by(symbol=symbol).first()

        db.add(
            WHOLimit(
                metal_id=metal.id,
                permissible_limit=value,
                unit="mg/kg",
                reference_source="WHO"
            )
        )

    db.commit()

    print("WHO limits inserted successfully!")

else:
    print("WHO limits already exist.")
    
    
    
# ==========================================================
# Exposure Parameters
# ==========================================================

if db.query(ExposureParameter).count() == 0:

    exposure_data = [

        ExposureParameter(
            consumer_type="Adult",
            daily_food_intake=0.345,
            average_body_weight=70.0,
            reference_source="USEPA"
        ),

        ExposureParameter(
            consumer_type="Child",
            daily_food_intake=0.232,
            average_body_weight=32.7,
            reference_source="USEPA"
        )

    ]

    db.add_all(exposure_data)

    db.commit()

    print("Exposure parameters inserted successfully!")

else:

    print("Exposure parameters already exist.")
    
    
# =====================================================
# Crop Bioaccumulation Factor
# =====================================================

if db.query(CropBAF).count() == 0:

    df = pd.read_csv("data/crop_baf.csv")

    for _, row in df.iterrows():

        metal = (
            db.query(HeavyMetal)
            .filter(HeavyMetal.symbol == row["Symbol"])
            .first()
        )

        db.add(
            CropBAF(
                crop_name=row["Crop Name"],
                metal_id=metal.id,
                bioaccumulation_factor=row["Bioaccumulation Factor"],
                reference_source="Compiled from peer-reviewed literature"
            )
        )

    db.commit()

    print("Crop BAF inserted successfully!")

else:

    print("Crop BAF already exists.")
    
    
# =====================================================
# Index Classification
# =====================================================

try:
    df = pd.read_csv("data/index_classification.csv")

    for _, row in df.iterrows():
        db.add(
            IndexClassification(
                index_name=row["index_name"],
                index_symbol=row["index_symbol"],
                lower_limit=row["lower_limit"],
                upper_limit=row["upper_limit"],
                standard_label=row["standard_label"],
            )
        )

    db.commit()
    print("Index classifications inserted successfully!")

except Exception as e:
    db.rollback()
    print(e)
    
    
# ==========================================================
# TOXIC RESPONSE FACTOR (Hakanson 1980)
# ==========================================================

if db.query(ToxicResponseFactor).count() == 0:

    tr_values = {
        "Pb": 5,
        "Cd": 30,
        "Hg": 40,
        "As": 10,
        "Cr": 2,
        "Cu": 5,
        "Ni": 5,
        "Zn": 1,
        "Co": 5,
        "Mn": 1,
        "Fe": 1
    }

    for symbol, tr in tr_values.items():

        metal = db.query(HeavyMetal).filter(
            HeavyMetal.symbol == symbol
        ).first()

        db.add(
            ToxicResponseFactor(
                metal_id=metal.id,
                toxic_response_factor=tr,
                reference_source="Hakanson (1980)"
            )
        )

    db.commit()

    print("Toxic Response Factors inserted successfully!")

else:
    print("Toxic Response Factors already exist.")
    
    
# =====================================================
# FOOD SAFETY CLASSIFICATION
# =====================================================

if db.query(FoodSafetyClassification).count() == 0:

    df = pd.read_csv("data/food_safety_classification.csv")

    for _, row in df.iterrows():

        db.add(
            FoodSafetyClassification(
                lower_limit=row["lower_limit"],
                upper_limit=row["upper_limit"],
                label=row["label"],
                interpretation=row["interpretation"],
            )
        )

    db.commit()

    print("Food safety classifications inserted successfully!")

else:
    print("Food safety classifications already exist.")

db.close()