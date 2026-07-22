
from database import Base,engine,SessionLocal
from models import HeavyMetal,Crop,SoilTexture

Base.metadata.create_all(engine)
db=SessionLocal()

if not db.query(HeavyMetal).first():
    db.add_all([
        HeavyMetal(metal_name="Cadmium",symbol="Cd",atomic_number=48),
        HeavyMetal(metal_name="Lead",symbol="Pb",atomic_number=82),
        HeavyMetal(metal_name="Chromium",symbol="Cr",atomic_number=24),
        HeavyMetal(metal_name="Mercury",symbol="Hg",atomic_number=80),
        HeavyMetal(metal_name="Arsenic",symbol="As",atomic_number=33),
        HeavyMetal(metal_name="Nickel",symbol="Ni",atomic_number=28),
        HeavyMetal(metal_name="Copper",symbol="Cu",atomic_number=29),
        HeavyMetal(metal_name="Zinc",symbol="Zn",atomic_number=30),
    ])
if not db.query(Crop).first():
    db.add_all([
        Crop(crop_name="Rice",crop_category="Cereal"),
        Crop(crop_name="Wheat",crop_category="Cereal"),
        Crop(crop_name="Tomato",crop_category="Vegetable"),
        Crop(crop_name="Spinach",crop_category="Leafy"),
        Crop(crop_name="Potato",crop_category="Vegetable"),
        Crop(crop_name="Carrot",crop_category="Root")
    ])
if not db.query(SoilTexture).first():
    for t in ["Sandy","Clay","Loam","Silt","Sandy Loam"]:
        db.add(SoilTexture(texture_name=t))
db.commit()
db.close()
print("Seed complete.")
