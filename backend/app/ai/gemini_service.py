import os
import json
import re
import google.generativeai as genai
from dotenv import load_dotenv
load_dotenv()

class GeminiException(Exception):
    pass

genai.configure(
    api_key=os.getenv("GOOGLE_API_KEY")
)

model = genai.GenerativeModel("gemini-3.5-flash")


def get_ai_response(prompt):

    response = model.generate_content(
    prompt,
    generation_config=genai.GenerationConfig(
        temperature=0.2,
        top_p=0.8,
        top_k=20,
        max_output_tokens=850,
        candidate_count=1,
    ),
    )

    text = response.text.strip()

    # -----------------------------
    # Remove markdown if Gemini adds it
    # -----------------------------

    text = text.replace("```json", "")
    text = text.replace("```", "")
    text = text.strip()

    # -----------------------------
    # Extract JSON only
    # -----------------------------

    match = re.search(r"\{.*\}", text, re.DOTALL)

    if not match:
        raise GeminiException("Gemini did not return valid JSON.")

    json_text = match.group(0)

    try:
        return json.loads(json_text)

    except Exception as e:

        print("\n========== GEMINI RESPONSE ==========\n")
        print(json_text)
        print("\n=====================================\n")

        raise GeminiException(
            f"Failed to parse Gemini response.\nOriginal Error : {e}"
        )