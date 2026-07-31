def summarize_metals(metal_table):

    lines = []

    for m in metal_table:

        # -----------------------------
        # Ecological Risk Category
        # -----------------------------

        er = m["er"]

        if er < 40:
            eco = "Low"

        elif er < 80:
            eco = "Moderate"

        elif er < 160:
            eco = "High"

        else:
            eco = "Very High"

        # -----------------------------
        # Health Risk Category
        # -----------------------------

        hq = max(
            m["adult_hq"],
            m["child_hq"]
        )

        if hq < 1:
            health = "Safe"

        elif hq < 2:
            health = "Moderate"

        else:
            health = "High"

        lines.append(
            f"""
{m['metal']}
Observed: {m['soil_concentration']:.2f} mg/kg
WHO Limit: {m['who_limit']:.2f} mg/kg
Status: {m['status']}
Ecological Risk: {eco}
Health Risk: {health}
"""
        )

    return "\n".join(lines)


def summarize_indices(index_table):

    return "\n".join(
      f"{i['index']}: {i['value']:.2f} ({i['label']})"
      for i in index_table
    )


def build_prompt(report):

    metal_summary = summarize_metals(
        report["metal_table"]
    )

    index_summary = summarize_indices(
        report["index_table"]
    )

    return f"""
You are an experienced environmental scientist and agricultural consultant.

Your audience includes farmers, land owners, students, NGOs, government officers and the general public.

Write in simple English.

Rules:

- Use short sentences.
- Keep paragraphs short.
- Avoid technical language unless necessary.
- If a technical term is used, explain it simply.
- Never mention formulas or calculations.
- Do not exaggerate risks.
- Be factual and practical.
- Respond ONLY in valid JSON.

Output format:

{{
  "summary": "...",

  "descriptions": {{
    "PLI": "...",
    "NPI": "...",
    "PERI": "...",
    "Adult HI": "...",
    "Child HI": "...",
    "Food Safety Index": "..."
}},

"recommendations": [
    "...",
    "...",
    "...",
    "...",
    "...",
    "..."
]
}}

----------------------------------------------------
ASSESSMENT DATA
----------------------------------------------------

Crop:
{report["crop"]}

Soil pH:
{report["soil_properties"]["soil_ph"]}

Soil Texture:
{report["soil_properties"]["soil_texture"]}

Organic Matter:
{report["soil_properties"]["organic_matter"]}

Bioavailability:
{report["bioavailability"]["label"]}

Overall Risk:
{report["overall_cards"]["overall_risk"]}

Food Safety:
{report["overall_cards"]["food_safety"]}

Adult Health:
{report["overall_cards"]["adult_health"]}

Child Health:
{report["overall_cards"]["child_health"]}

Pollution Indices:

{index_summary}

Heavy Metal Summary:

{metal_summary}

----------------------------------------------------
TASK
----------------------------------------------------

SUMMARY
- Around 200 words.
- Explain the overall condition.
- Mention whether the soil is safe or contaminated.
- Mention the most concerning heavy metals.
- Mention food safety.
- Mention health risks for adults and children.
- End with one practical concluding sentence.

INDEX DESCRIPTIONS
- Write only 1-2 simple sentences for each index.
- Explain what the result means.
- Mention whether the value indicates low, moderate or high concern.

RECOMMENDATIONS
- Give exactly 6 recommendations.
- Make them practical.
- Start each recommendation with an action verb such as:
  Use,
  Apply,
  Monitor,
  Avoid,
  Maintain,
  Test,
  Improve.
- Do not repeat the same advice.
- Match recommendations to the detected risks.
"""