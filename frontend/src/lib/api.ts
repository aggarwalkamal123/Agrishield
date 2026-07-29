const API_BASE_URL = "http://127.0.0.1:8000";

export async function submitAssessment(payload: any) {

    const response = await fetch(

        `${API_BASE_URL}/analyze/analyze`,

        {

            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify(payload),

        }

    );

    if (!response.ok) {

        throw new Error(await response.text());

    }

    return await response.json();

}

export async function downloadPDF(data: any) {

    const response = await fetch(

        `${API_BASE_URL}/analyze/report`,

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

            },

            body: JSON.stringify(data),

        }

    );

    if (!response.ok) {

        throw new Error(await response.text());

    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "Soil_Assessment_Report.pdf";

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);

}