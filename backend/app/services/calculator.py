import math

from app.database.queries import (
    get_background,
    get_baf,
    get_rfd,
    get_tr,
    get_who_limit,
    get_exposure
)


# ==========================================================
# CONTAMINATION FACTOR (CF)
# CF = Csoil / Cbackground
# ==========================================================

def calculate_cf(c_soil, c_background):

    if c_background is None or c_background == 0:
        return 0

    return c_soil / c_background


# ==========================================================
# GEOACCUMULATION INDEX (Igeo)
# Igeo = log2(Csoil / (1.5 × Background))
# Müller (1969)
# ==========================================================

def calculate_igeo(c_soil, c_background):

    if c_background is None or c_background == 0:
        return 0

    return math.log2(
        c_soil /
        (1.5 * c_background)
    )


# ==========================================================
# ENRICHMENT FACTOR (EF)
#
# EF = (Cx / CFe)sample
#      -----------------
#      (Bx / BFe)background
#
# Fe is used as reference element.
# ==========================================================

def calculate_ef(
        c_soil,
        c_background,
        fe_soil,
        fe_background
):

    if (
        fe_soil == 0
        or fe_background == 0
        or c_background == 0
    ):
        return 0

    sample_ratio = c_soil / fe_soil

    background_ratio = (
        c_background /
        fe_background
    )

    return sample_ratio / background_ratio


# ==========================================================
# ECOLOGICAL RISK FACTOR
#
# Er = Tr × CF
#
# Hakanson (1980)
# ==========================================================

def calculate_er(cf, tr):

    if tr is None:
        return 0

    return cf * tr


# ==========================================================
# POLLUTION LOAD INDEX
#
# PLI = (CF1 × CF2 × ... × CFn)^(1/n)
# ==========================================================

def calculate_pli(cf_values):

    if len(cf_values) == 0:
        return 0

    product = 1

    for cf in cf_values:
        product *= cf

    return product ** (1 / len(cf_values))


# ==========================================================
# NEMEROW POLLUTION INDEX
#
# NPI = √((CFmax² + CFavg²)/2)
# ==========================================================

def calculate_npi(cf_values):

    if len(cf_values) == 0:
        return 0

    cf_max = max(cf_values)

    cf_avg = (
        sum(cf_values)
        / len(cf_values)
    )

    return math.sqrt(
        (
            cf_max ** 2
            +
            cf_avg ** 2
        ) / 2
    )


# ==========================================================
# POTENTIAL ECOLOGICAL RISK INDEX
#
# PERI = ΣEr
# ==========================================================

def calculate_peri(er_values):

    return sum(er_values)


# ==========================================================
# PLANT CONCENTRATION
#
# Cplant = BAF × Csoil
# ==========================================================

def calculate_cplant(
        c_soil,
        baf
):

    if baf is None:
        return 0

    return (
        c_soil
        * baf
    )


# ==========================================================
# DAILY INTAKE OF METAL (DIM)
#
# DIM =
# (Cplant × 0.085 × Daily Intake)
# -------------------------------
# Body Weight
# ==========================================================

def calculate_dim(

        c_plant,

        daily_food,

        body_weight

):

    return (

        c_plant
        * 0.085
        * daily_food

    ) / body_weight


# ==========================================================
# HAZARD QUOTIENT
#
# HQ = DIM / RfD
# ==========================================================

def calculate_hq(
        dim,
        rfd
):

    if (
        rfd is None
        or rfd == 0
    ):
        return 0

    return dim / rfd


# ==========================================================
# HAZARD INDEX
#
# HI = ΣHQ
# ==========================================================

def calculate_hi(hq_values):

    return sum(hq_values)

# ==========================================================
# CALCULATE ALL METAL-WISE VALUES
# ==========================================================

def calculate_all_metal_indices(
    heavy_metals: dict,
    crop: str
):

    adult = get_exposure("Adult")
    child = get_exposure("Child")

    if adult is None:
        raise Exception("Adult exposure parameters missing.")

    if child is None:
        raise Exception("Child exposure parameters missing.")

    fe_background = get_background("Fe")

    fe_soil = heavy_metals.get("Fe", fe_background)

    if fe_background is None or fe_background == 0:
        raise Exception("Background Fe value not found.")

    metal_results = []

    cf_values = []

    er_values = []

    adult_hq_values = []

    child_hq_values = []

    for symbol, c_soil in heavy_metals.items():

        background = get_background(symbol)

        baf = get_baf(crop, symbol)

        rfd = get_rfd(symbol)

        tr = get_tr(symbol)
        
        who_limit = get_who_limit(symbol)

        cf = calculate_cf(
            c_soil,
            background
        )

        igeo = calculate_igeo(
            c_soil,
            background
        )

        ef = calculate_ef(
            c_soil,
            background,
            fe_soil,
            fe_background
        )

        er = calculate_er(
            cf,
            tr
        )

        cplant = calculate_cplant(
            c_soil,
            baf
        )

        adult_dim = calculate_dim(
            cplant,
            adult.daily_food_intake,
            adult.average_body_weight
        )

        child_dim = calculate_dim(
            cplant,
            child.daily_food_intake,
            child.average_body_weight
        )

        adult_hq = calculate_hq(
            adult_dim,
            rfd
        )

        child_hq = calculate_hq(
            child_dim,
            rfd
        )
        
        

        cf_values.append(cf)

        er_values.append(er)

        adult_hq_values.append(adult_hq)

        child_hq_values.append(child_hq)

        metal_results.append({

    "metal": symbol,

    "soil_concentration": c_soil,

    "background": background,

    "who_limit": who_limit,

    "baf": baf,

    "rfd": rfd,

    "tr": tr,

    "cf": cf,

    "igeo": igeo,

    "ef": ef,

    "er": er,

    "plant_concentration": cplant,

    "adult_dim": adult_dim,

    "child_dim": child_dim,

    "adult_hq": adult_hq,

    "child_hq": child_hq

})

    return {

        "metal_results": metal_results,

        "cf_values": cf_values,

        "er_values": er_values,

        "adult_hq_values": adult_hq_values,

        "child_hq_values": child_hq_values

    }
    
# ==========================================================
# MAIN CALCULATOR
# ==========================================================

def calculate_indices(
    heavy_metals: dict,
    crop: str
):

    results = calculate_all_metal_indices(
        heavy_metals=heavy_metals,
        crop=crop
    )

    metal_results = results["metal_results"]

    cf_values = results["cf_values"]

    er_values = results["er_values"]

    adult_hq_values = results["adult_hq_values"]

    child_hq_values = results["child_hq_values"]

    # ======================================================
    # OVERALL INDICES
    # ======================================================

    pli = calculate_pli(cf_values)

    npi = calculate_npi(cf_values)

    peri = calculate_peri(er_values)

    adult_hi = calculate_hi(adult_hq_values)

    child_hi = calculate_hi(child_hq_values)

    # ======================================================
    # FOOD SAFETY INDEX (FSI)
    # ======================================================

    food_safety_ratios = {}

    for metal in metal_results:

        who_limit = metal["who_limit"]

        if who_limit is not None and who_limit > 0:

            ratio = (
                metal["plant_concentration"]
                / who_limit
            )

            food_safety_ratios[
                metal["metal"]
            ] = ratio

    food_safety_index = (
        max(food_safety_ratios.values())
        if food_safety_ratios
        else 0
    )

    # ======================================================
    # RETURN
    # ======================================================

    return {

        "metal_results": metal_results,

        "overall_indices": {

            "pli": pli,

            "npi": npi,

            "peri": peri,

            "adult_hi": adult_hi,

            "child_hi": child_hi,

            "food_safety_index": food_safety_index

        },

        "food_safety_ratios": food_safety_ratios

    }
    