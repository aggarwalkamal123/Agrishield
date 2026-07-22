
from sqlalchemy import Column,Integer,String,Float,ForeignKey,UniqueConstraint
from sqlalchemy.orm import relationship
from database import Base

class HeavyMetal(Base):
    __tablename__="heavy_metals"
    metal_id=Column(Integer,primary_key=True)
    metal_name=Column(String,nullable=False)
    symbol=Column(String,unique=True,nullable=False)
    atomic_number=Column(Integer)
    description=Column(String)

class BackgroundConcentration(Base):
    __tablename__="background_concentration"
    id=Column(Integer,primary_key=True)
    metal_id=Column(Integer,ForeignKey("heavy_metals.metal_id"))
    background_concentration=Column(Float)
    unit=Column(String)
    reference_source=Column(String)
    metal=relationship("HeavyMetal")

class Crop(Base):
    __tablename__="crops"
    crop_id=Column(Integer,primary_key=True)
    crop_name=Column(String,unique=True)
    crop_category=Column(String)

class PermissibleLimit(Base):
    __tablename__="permissible_limits"
    id=Column(Integer,primary_key=True)
    crop_id=Column(Integer,ForeignKey("crops.crop_id"))
    metal_id=Column(Integer,ForeignKey("heavy_metals.metal_id"))
    permissible_limit=Column(Float)
    organization=Column(String)
    unit=Column(String)
    __table_args__=(UniqueConstraint("crop_id","metal_id"),)

class ToxicityResponseFactor(Base):
    __tablename__="toxicity_response_factor"
    id=Column(Integer,primary_key=True)
    metal_id=Column(Integer,ForeignKey("heavy_metals.metal_id"),unique=True)
    toxicity_factor=Column(Float)
    reference_source=Column(String)

class TransferFactor(Base):
    __tablename__="transfer_factor"
    id=Column(Integer,primary_key=True)
    crop_id=Column(Integer,ForeignKey("crops.crop_id"))
    metal_id=Column(Integer,ForeignKey("heavy_metals.metal_id"))
    transfer_factor=Column(Float)
    reference_source=Column(String)

class BioaccumulationFactor(Base):
    __tablename__="bioaccumulation_factor"
    id=Column(Integer,primary_key=True)
    crop_id=Column(Integer,ForeignKey("crops.crop_id"))
    metal_id=Column(Integer,ForeignKey("heavy_metals.metal_id"))
    BAF=Column(Float)
    reference_source=Column(String)

class SoilTexture(Base):
    __tablename__="soil_texture"
    texture_id=Column(Integer,primary_key=True)
    texture_name=Column(String,unique=True)

class IndexClassification(Base):
    __tablename__="index_classification"
    id=Column(Integer,primary_key=True)
    index_name=Column(String)
    lower_limit=Column(Float)
    upper_limit=Column(Float)
    label=Column(String)
    description=Column(String)

class Recommendation(Base):
    __tablename__="recommendations"
    recommendation_id=Column(Integer,primary_key=True)
    risk_type=Column(String)
    recommendation=Column(String)
