from fastapi import Request
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException


def register_exception_handlers(app):

    @app.exception_handler(RequestValidationError)
    async def validation_exception_handler(request, exc):

        return JSONResponse(

            status_code=422,

            content={

                "success": False,

                "error": "Validation Error",

                "details": exc.errors()

            }

        )

    @app.exception_handler(StarletteHTTPException)
    async def http_exception_handler(request, exc):

        return JSONResponse(

            status_code=exc.status_code,

            content={

                "success": False,

                "error": exc.detail

            }

        )

    @app.exception_handler(Exception)
    async def global_exception_handler(request, exc):

        return JSONResponse(

            status_code=500,

            content={

                "success": False,

                "error": "Internal Server Error",

                "details": str(exc)

            }

        )