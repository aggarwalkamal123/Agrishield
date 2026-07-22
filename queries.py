
from sqlalchemy import select
from database import SessionLocal
from models import *

def _session():
    return SessionLocal()

def get_background_value(symbol):
    with _session() as s:
        return s.query(BackgroundConcentration.background_concentration)            .join(HeavyMetal).filter(HeavyMetal.symbol==symbol).scalar()

def get_toxicity_factor(symbol):
    with _session() as s:
        return s.query(ToxicityResponseFactor.toxicity_factor)            .join(HeavyMetal).filter(HeavyMetal.symbol==symbol).scalar()

def get_transfer_factor(crop,symbol):
    with _session() as s:
        return s.query(TransferFactor.transfer_factor)            .join(Crop,TransferFactor.crop_id==Crop.crop_id)            .join(HeavyMetal,TransferFactor.metal_id==HeavyMetal.metal_id)            .filter(Crop.crop_name==crop,HeavyMetal.symbol==symbol).scalar()

def get_who_limit(crop,symbol):
    with _session() as s:
        return s.query(PermissibleLimit.permissible_limit)            .join(Crop).join(HeavyMetal)            .filter(Crop.crop_name==crop,HeavyMetal.symbol==symbol).scalar()

def get_index_classification(index_name,value):
    with _session() as s:
        return s.query(IndexClassification.label)            .filter(IndexClassification.index_name==index_name,
                    IndexClassification.lower_limit<=value,
                    IndexClassification.upper_limit>=value).scalar()

def get_recommendations(risk_type):
    with _session() as s:
        return [r.recommendation for r in s.query(Recommendation).filter_by(risk_type=risk_type)]
