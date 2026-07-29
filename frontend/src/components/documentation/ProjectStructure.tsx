export default function ProjectStructure() {

    return (

        <section
            id="structure"
            className="space-y-8 scroll-mt-28"
        >

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">

                Project Directory Structure

            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">

                AgriShield follows a modular architecture where the frontend,
                backend, AI services, database layer, and utility modules are
                organized into separate directories to improve maintainability,
                scalability, and future development.

            </p>

            <div
                className="
                    overflow-x-auto
                    rounded-3xl
                    border
                    bg-slate-900
                    p-8
                    text-sm
                    text-green-300
                    shadow-lg dark:shadow-black/40
                "
            >

                <pre>{`
AgriShield
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   └── styles/
│
├── backend/
│   ├── ai/
│   ├── database/
│   ├── routers/
│   ├── schemas/
│   ├── services/
│   ├── utils/
│   └── main.py
│
├── dataset/
│
├── documentation/
│
├── reports/
│
└── README.md
`}</pre>

            </div>

            <div
                className="
                    rounded-3xl
                    border
                    bg-green-50 dark:bg-slate-800
                    p-8
                "
            >

                <h3 className="text-2xl font-bold text-green-700">

                    Organization Highlights

                </h3>

                <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-gray-700 dark:text-gray-300">

                    <li>
                        Frontend developed using Next.js and Tailwind CSS.
                    </li>

                    <li>
                        Backend implemented with FastAPI using modular routing.
                    </li>

                    <li>
                        Database stores heavy metal thresholds, toxicity factors,
                        crop-specific parameters, and reference values.
                    </li>

                    <li>
                        AI services generate assessment summaries and recommendations
                        using the Gemini API.
                    </li>

                    <li>
                        Service modules perform pollution assessment,
                        bioavailability estimation, health risk analysis,
                        chart generation, and PDF report creation.
                    </li>

                </ul>

            </div>

        </section>

    );

}