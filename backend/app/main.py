from fastapi import FastAPI
from app.routes.analyze import router as analyze_router
from dotenv import load_dotenv
load_dotenv()

app = FastAPI(
    title="AgriShield API",
    description="Heavy Metal Risk Assessment and Decision Support System",
    version="1.0.0"
)

from app.core.exception_handler import register_exception_handlers
register_exception_handlers(app)

app.include_router(
    analyze_router,
    prefix="/analyze",
    tags=["Analysis"]
)


@app.get("/")
def home():

    return {

        "message": "Welcome to AgriShield Backend!",

        "status": "Running Successfully"

    }