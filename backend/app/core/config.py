from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    APP_NAME: str = "AgriShield"
    VERSION: str = "1.0.0"

    DATABASE_URL: str = "sqlite:///./agrishield.db"

    MODEL_PATH: str = "trained_models/model.pkl"

    REPORT_PATH: str = "app/reports/"

    DEBUG: bool = True

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()