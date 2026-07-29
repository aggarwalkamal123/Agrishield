from io import BytesIO

from app.services.pdf_charts import (
    metal_vs_limit,
    pollution_chart,
    contribution_chart,
    health_chart,
)

from reportlab.lib.units import mm

from reportlab.lib import colors

from reportlab.lib.enums import TA_CENTER

from reportlab.lib.styles import getSampleStyleSheet

from reportlab.lib.units import inch

from reportlab.platypus import (

    SimpleDocTemplate,

    Paragraph,

    Spacer,

    Table,

    TableStyle,

    Image,

)

from reportlab.pdfgen import canvas


class NumberedCanvas(canvas.Canvas):

    def __init__(self,*args,**kwargs):

        super().__init__(*args,**kwargs)

        self.pages=[]

    def showPage(self):

        self.pages.append(dict(self.__dict__))

        self._startPage()

    def save(self):

        total=len(self.pages)

        for page in self.pages:

            self.__dict__.update(page)

            self.draw_page_number(total)

            super().showPage()

        super().save()

    def draw_page_number(self, total):

        self.setStrokeColor(colors.lightgrey)

        self.line(
            20 * mm,
            15 * mm,
            190 * mm,
            15 * mm
        )

        self.setFont("Helvetica", 8)

        self.setFillColor(colors.grey)

        self.drawString(
            20 * mm,
            10 * mm,
            "AgriShield • Soil Contamination Assessment Report • USICT, GGSIPU"
        )

        self.drawRightString(
            190 * mm,
            10 * mm,
            f"Page {self._pageNumber}/{total}"
        )


def generate_pdf(data):
    
    styles=getSampleStyleSheet()

    title_style=styles["Title"]

    title_style.alignment=TA_CENTER

    heading_style=styles["Heading2"]

    heading_style.textColor=colors.darkgreen

    buffer = BytesIO()

    doc = SimpleDocTemplate(buffer)

    elements = []
    
    logo=Image(

        "assets/agrishield_logo.png",

        width=110,

        height=85

    )

    logo.hAlign="CENTER"

    elements.append(logo)

    elements.append(Spacer(1,10))
    
    elements.append(

    Paragraph(

        "<b>AgriShield</b>",

        title_style

    )

    )
    
    elements.append(

    Paragraph(

        "<b>University School of Information & Communication Technology</b>",

        styles["Heading2"]

    )

    )
    
    elements.append(

    Paragraph(

        "Guru Gobind Singh Indraprastha University",

        styles["Heading3"]

    )

    )
    
    elements.append(

    Spacer(1,15)

    )
    
    elements.append(

    Paragraph(

        "<font size=18><b>Soil Contamination Assessment Report</b></font>",
        title_style

    )
    )
    
    Spacer(1,15)
    
    info=Table([

    ["Crop",data["crop"]],

    ])

    info.setStyle(TableStyle([

    ("BACKGROUND",(0,0),(0,-1),colors.darkgreen),

    ("TEXTCOLOR",(0,0),(0,-1),colors.white),

    ("BACKGROUND",(1,0),(1,-1),colors.beige),

    ("GRID",(0,0),(-1,-1),0.5,colors.grey),

    ("BOTTOMPADDING",(0,0),(-1,-1),8),

    ]))

    elements.append(info)

    elements.append(Spacer(1,20))

    elements.append(Spacer(1,20))

    soil = data["soil_properties"]

    soil_table = Table([

        ["Parameter","Value"],

        ["Soil pH",soil["soil_ph"]],

        ["Organic Matter",soil["organic_matter"]],

        ["Texture",soil["soil_texture"]],

        ["pH Category",soil["ph_category"]],

    ])

    soil_table.setStyle(

        TableStyle([

            ("BACKGROUND",(0,0),(-1,0),colors.HexColor("#166534")),
            ("TEXTCOLOR",(0,0),(-1,0),colors.white),
            ("GRID",(0,0),(-1,-1),0.5,colors.grey),
            ("BACKGROUND",(0,1),(-1,-1),colors.whitesmoke),
            ("BOTTOMPADDING",(0,0),(-1,-1),8),
            ("TOPPADDING",(0,0),(-1,-1),8),
            ("FONTSIZE",(0,0),(-1,-1),10)

        ])

    )

    elements.append(soil_table)

    elements.append(Spacer(1,25))
    
    cards=data["overall_cards"]
    
    risk_table=Table([

    ["Soil Pollution",cards["soil_pollution"]],

    ["Food Safety",cards["food_safety"]],

    ["Adult Health",cards["adult_health"]],

    ["Child Health",cards["child_health"]],

    ["Overall Risk",cards["overall_risk"]],

    ])

    risk_table.setStyle(TableStyle([

    ("BACKGROUND",(0,0),(0,-1),colors.HexColor("#166534")),

    ("TEXTCOLOR",(0,0),(0,-1),colors.white),

    ("BACKGROUND",(1,0),(1,-1),colors.HexColor("#dcfce7")),

    ("GRID",(0,0),(-1,-1),0.5,colors.grey),

    ("BOTTOMPADDING",(0,0),(-1,-1),8),

    ]))

    elements.append(

    Paragraph(

    "<b>Risk Summary</b>",

    heading_style

    )

    )

    elements.append(risk_table)

    elements.append(Spacer(1,20))

    elements.append(

        Paragraph(

            "<b>Assessment Summary</b>",

            styles["Heading2"]

        )

    )

    elements.append(

        Paragraph(

            data["assessment_summary"],

            styles["BodyText"]

        )

    )

    elements.append(Spacer(1,25))

    elements.append(

        Paragraph(

            "<b>Recommendations</b>",

            styles["Heading2"]

        )

    )

    for item in data["recommendations"]:

        elements.append(

            Paragraph(

                f"• {item}",

                styles["BodyText"]

            )

        )
        
    # ==========================================
    # Charts
    # ==========================================

    elements.append(Spacer(1, 20))

    elements.append(
        Paragraph(
            "<b>Visual Analysis</b>",
            heading_style
        )
    )

    elements.append(Spacer(1, 10))


    # ------------------------------------------
    # Metal vs WHO
    # ------------------------------------------

    metal_chart = metal_vs_limit(
        data["charts"]["metal_vs_limit_chart"]
    )

    elements.append(
        Paragraph(
            "<b>Heavy Metal Concentration vs WHO Limit</b>",
            styles["Heading3"]
        )
    )

    elements.append(
        Image(
            metal_chart,
            width=6.8 * inch,
            height=3.8 * inch,
        )
    )

    elements.append(Spacer(1, 20))


    # ------------------------------------------
    # Pollution Indices
    # ------------------------------------------

    index_chart = pollution_chart(
        data["charts"]["pollution_indices_chart"]
    )

    elements.append(
        Paragraph(
            "<b>Pollution Indices</b>",
            styles["Heading3"]
        )
    )

    elements.append(
        Image(
            index_chart,
            width=6.8 * inch,
            height=3.8 * inch,
        )
    )

    elements.append(Spacer(1, 20))


    # ------------------------------------------
    # Metal Contribution
    # ------------------------------------------

    contribution = contribution_chart(
        data["charts"]["metal_contribution_chart"]
    )

    elements.append(
        Paragraph(
            "<b>Ecological Risk Contribution</b>",
            styles["Heading3"]
        )
    )

    elements.append(
        Image(
            contribution,
            width=5.5 * inch,
            height=5.5 * inch,
        )
    )

    elements.append(Spacer(1, 20))


    # ------------------------------------------
    # Health Risk
    # ------------------------------------------

    health = health_chart(
        data["charts"]["health_risk_chart"]
    )

    elements.append(
        Paragraph(
            "<b>Health Risk Comparison</b>",
            styles["Heading3"]
        )
    )

    elements.append(
        Image(
            health,
            width=6.5 * inch,
            height=3.8 * inch,
        )
    )

    elements.append(Spacer(1, 20))

    doc.build(

    elements,

    canvasmaker=NumberedCanvas

    )

    pdf = buffer.getvalue()
    
    import os

    for file in [
        metal_chart,
        index_chart,
        contribution,
        health,
    ]:
        try:
            os.remove(file)
        except:
            pass

    buffer.close()

    return pdf