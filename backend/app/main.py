from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.analyze import router as analyze_router
from dotenv import load_dotenv
load_dotenv()

app = FastAPI(
    title="AgriShield API",
    description="Heavy Metal Risk Assessment and Decision Support System",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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