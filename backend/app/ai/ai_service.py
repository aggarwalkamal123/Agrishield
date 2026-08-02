from app.ai.gemini_service import (
    get_ai_response as gemini_response,
)

from app.ai.groq_service import (
    get_groq_response,
)


def get_ai_response(prompt):

    # -----------------------------
    # Try Gemini
    # -----------------------------

    try:

        print("\n========== USING GEMINI ==========\n")

        return gemini_response(prompt)

    except Exception as e:

        print("\nGemini Failed\n")

        print(e)

        # -----------------------------
        # Try Groq
        # -----------------------------

        try:

            print("\n========== USING GROQ ==========\n")

            return get_groq_response(prompt)

        except Exception as e:

            print("\nGroq Failed\n")

            print(e)

            raise Exception(
        "All AI providers failed."
    )