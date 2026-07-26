from app.database.database import engine, Base
import app.database.models   # IMPORTANT: Import all models

print("Creating tables...")

Base.metadata.create_all(bind=engine)

print("Tables created successfully!")