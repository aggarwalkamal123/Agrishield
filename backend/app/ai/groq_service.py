import os
import json
import re

from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


class GroqException(Exception):
    pass


def get_groq_response(prompt):

    response = client.chat.completions.create(

        model="llama-3.3-70b-versatile",

        temperature=0.2,

        max_tokens=850,

        messages=[

            {

                "role": "user",

                "content": prompt

            }

        ]

    )

    text = response.choices[0].message.content.strip()

    text = text.replace("```json", "")
    text = text.replace("```", "")
    text = text.strip()

    match = re.search(r"\{.*\}", text, re.DOTALL)

    if not match:

        raise GroqException("Groq returned invalid JSON.")

    return json.loads(match.group(0))