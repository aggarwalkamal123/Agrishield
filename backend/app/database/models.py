from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship

from app.database.database import Base


# ====================================
# Heavy Metals
# ====================================

class HeavyMetal(Base):
    __tablename__ = "heavy_metals"

    id = Column(Integer, primary_key=True, index=True)

    metal_name = Column(String, nullable=False)

    symbol = Column(String, unique=True, nullable=False)

    atomic_number = Column(Integer, nullable=False)

    atomic_weight = Column(Float, nullable=False)

    oral_rfd = Column(Float, nullable=False)

    toxicity_score = Column(Integer, nullable=False)

    carcinogenic = Column(String, nullable=False)

    description = Column(String, nullable=False)


# ====================================
# Background Concentration
# ====================================

class BackgroundConcentration(Base):
    __tablename__ = "background_concentrations"

    id = Column(Integer, primary_key=True, index=True)

    metal_id = Column(Integer, ForeignKey("heavy_metals.id"), nullable=False)

    background_concentration = Column(Float, nullable=False)

    unit = Column(String, nullable=False)

    reference_source = Column(String, nullable=False)


# ====================================
# WHO limits
# ====================================

class WHOLimit(Base):
    __tablename__ = "who_limits"

    id = Column(Integer, primary_key=True)

    metal_id = Column(
        Integer,
        ForeignKey("heavy_metals.id"),
        nullable=False
    )

    permissible_limit = Column(Float, nullable=False)

    unit = Column(String, nullable=False)

    reference_source = Column(String, nullable=False)

    metal = relationship("HeavyMetal")
    
    
    
# ====================================
# Exposure Parameters
# ====================================

class ExposureParameter(Base):
    __tablename__ = "exposure_parameters"

    id = Column(Integer, primary_key=True)

    consumer_type = Column(String, unique=True, nullable=False)

    daily_food_intake = Column(Float, nullable=False)

    average_body_weight = Column(Float, nullable=False)

    reference_source = Column(String, nullable=False)
    
    
    
# ====================================
# Crop Bioaccumulation Factor (BAF)
# ====================================

class CropBAF(Base):
    __tablename__ = "crop_baf"

    id = Column(Integer, primary_key=True, index=True)

    crop_name = Column(String, nullable=False)

    metal_id = Column(
        Integer,
        ForeignKey("heavy_metals.id"),
        nullable=False
    )

    bioaccumulation_factor = Column(
        Float,
        nullable=False
    )

    reference_source = Column(
        String,
        nullable=False
    )

    metal = relationship("HeavyMetal")


# ====================================
# Index Classification
# ====================================

class IndexClassification(Base):
    __tablename__ = "index_classification"

    id = Column(Integer, primary_key=True, index=True)

    index_name = Column(String, nullable=False)

    index_symbol = Column(String, nullable=False)

    lower_limit = Column(Float, nullable=False)

    upper_limit = Column(Float, nullable=False)

    standard_label = Column(String, nullable=False)
    
    
# ====================================
# Hakanson Toxic Response Factor (Tr)
# ====================================

class ToxicResponseFactor(Base):
    __tablename__ = "toxic_response_factors"

    id = Column(Integer, primary_key=True, index=True)

    metal_id = Column(
        Integer,
        ForeignKey("heavy_metals.id"),
        nullable=False,
        unique=True
    )

    toxic_response_factor = Column(
        Float,
        nullable=False
    )

    reference_source = Column(
        String,
        nullable=False
    )

    metal = relationship("HeavyMetal")
    
    
# ====================================
# Food Safety Classification
# ====================================

class FoodSafetyClassification(Base):
    __tablename__ = "food_safety_classification"

    id = Column(Integer, primary_key=True, index=True)

    lower_limit = Column(Float, nullable=False)

    upper_limit = Column(Float, nullable=False)

    label = Column(String, nullable=False)

    interpretation = Column(String, nullable=False)


# ====================================
# Temporary Results
# ====================================

class CalculatedIndices(Base):
    __tablename__ = "calculated_indices"

    id = Column(Integer, primary_key=True)

    pli = Column(Float)

    npi = Column(Float)

    peri = Column(Float)

    hq = Column(Float)

    hi = Column(Float)

    soil_pollution = Column(String)

    food_safety = Column(String)

    health_risk = Column(String)

    overall_risk = Column(String)