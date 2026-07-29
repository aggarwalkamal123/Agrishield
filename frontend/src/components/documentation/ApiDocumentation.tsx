const endpoints = [

    {
        method: "POST",
        url: "/analyze/analyze",
        purpose: "Perform complete soil contamination assessment."
    },

    {
        method: "POST",
        url: "/analyze/report",
        purpose: "Generate downloadable PDF report."
    },

];

export default function ApiDocumentation() {

    return (

        <section
            id="api"
            className="space-y-8 scroll-mt-28"
        >

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">

                API Documentation

            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">

                AgriShield exposes REST APIs through FastAPI. The frontend
                communicates with these endpoints to perform soil analysis and
                generate downloadable reports.

            </p>

            <div className="space-y-6">

                {endpoints.map((api) => (

                    <div
                        key={api.url}
                        className="
                            rounded-3xl
                            border
                            bg-white dark:bg-slate-900
                            p-8
                            shadow-sm
                        "
                    >

                        <div className="flex items-center gap-5">

                            <span
                                className="
                                    rounded-xl
                                    bg-green-700
                                    px-5
                                    py-2
                                    text-sm
                                    font-bold
                                    text-white
                                "
                            >
                                {api.method}
                            </span>

                            <code className="text-lg font-semibold text-slate-800">

                                {api.url}

                            </code>

                        </div>

                        <p className="mt-5 text-gray-700 dark:text-gray-300 leading-8">

                            {api.purpose}

                        </p>

                    </div>

                ))}

            </div>

            {/* Request Example */}

            <div className="rounded-3xl bg-slate-900 p-8">

                <h3 className="mb-5 text-2xl font-bold text-white">

                    Sample Request

                </h3>

                <pre className="overflow-auto text-green-300">

                    {`POST /analyze/analyze

{
  "crop": "Rice",
  "soil_ph": 6.8,
  "organic_matter": 2.4,
  "soil_texture": "Loamy",
  "heavy_metals": {
      "Cd": 0.42,
      "Pb": 31.5,
      "As": 8.1,
      "Cr": 52.6
  }
}`}

                </pre>

            </div>

        </section>

    );

}