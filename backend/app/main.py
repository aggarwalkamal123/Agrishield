from fastapi import FastAPI

app = FastAPI(
    title="AgriShield API",
    description="Heavy Metal Risk Assessment and Decision Support System",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Welcome to AgriShield Backend!",
        "status": "Running Successfully"
    }