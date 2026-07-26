# ==========================================================
# BUILD ALL DASHBOARD CHARTS
# ==========================================================

def build_charts(metal_results, overall, index_table, overall_cards):

    # ======================================================
    # Chart 1
    # Heavy Metal vs WHO Limit
    # ======================================================

    metal_vs_limit_chart = []

    for metal in metal_results:

        metal_vs_limit_chart.append({

            "metal": metal["metal"],

            "soil": metal["soil_concentration"],

            "limit": metal["who_limit"]

        })

    # ======================================================
    # Chart 2
    # Pollution Indices
    # ======================================================

    pollution_indices_chart = []

    for item in index_table:

        pollution_indices_chart.append({

            "index": item["index"],

            "value": round(item["value"],3),

            "label": item["label"]

        })
    
    # ======================================================
    # Chart 3
    # Heavy Metal Contribution
    # ======================================================
    
    total_er = sum(

    metal["er"]

    for metal in metal_results

    )

    metal_contribution_chart = []

    others = 0

    for metal in metal_results:

        if total_er == 0:

            continue

        contribution = (

            metal["er"]

            / total_er

        ) * 100

        if contribution >= 3:

            metal_contribution_chart.append({

                "metal": metal["metal"],

                "percentage": round(contribution,2),

                "er": round(metal["er"],2)

            })

        else:

            others += contribution


    if others > 0:

        metal_contribution_chart.append({

            "metal": "Others",

            "percentage": round(others, 2),
            
            "er": None

        })


    # Sort from highest to lowest

    metal_contribution_chart.sort(

        key=lambda x: x["percentage"],

        reverse=True

    )

    # ======================================================
    # Chart 4
    # Health Risk
    # ======================================================
    
    adult_label = ""
    child_label = ""

    for item in index_table:

        if item["index"] == "Adult HI":
            adult_label = item["label"]

        elif item["index"] == "Child HI":
            child_label = item["label"]


    health_risk_chart = [

        {

            "group": "Adult",

            "safe_limit": 1,

            "actual": round(overall["adult_hi"], 3),

            "status": adult_label

        },

        {

            "group": "Child",

            "safe_limit": 1,

            "actual": round(overall["child_hi"], 3),

            "status": child_label

        }

    ]
    
    # ======================================================
    # Dashboard Summary
    # ======================================================
    
    dashboard_summary = {

    "overall_risk": overall_cards["overall_risk"],

    "soil_pollution": overall_cards["soil_pollution"],

    "food_safety": overall_cards["food_safety"],

    "adult_health": overall_cards["adult_health"],

    "child_health": overall_cards["child_health"],

    "economic_impact": overall_cards["economic_impact"]

    }
    

    # =====================================================

    return {
        
        "dashboard_summary": 
            
            dashboard_summary,

        "metal_vs_limit_chart":

            metal_vs_limit_chart,

        "pollution_indices_chart":

            pollution_indices_chart,

        "metal_contribution_chart":

            metal_contribution_chart,

        "health_risk_chart":

            health_risk_chart

    }