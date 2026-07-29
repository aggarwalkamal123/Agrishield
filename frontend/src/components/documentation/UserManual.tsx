const steps = [

    {
        title: "Step 1 — Open Assessment Page",
        description:
            "Navigate to the Assessment page from the navigation bar to begin a new soil contamination analysis.",
    },

    {
        title: "Step 2 — Enter Soil Information",
        description:
            "Provide the crop name, soil pH, organic matter, soil texture, temperature, moisture, and heavy metal concentrations manually or upload a CSV file.",
    },

    {
        title: "Step 3 — Start Assessment",
        description:
            "Click the 'Start Assessment' button. AgriShield validates the input data and begins the analytical pipeline automatically.",
    },

    {
        title: "Step 4 — Review Results",
        description:
            "The dashboard displays pollution indices, bioavailability estimation, food safety analysis, health risk assessment, charts, and AI-generated recommendations.",
    },

    {
        title: "Step 5 — Download Report",
        description:
            "Download the generated PDF report containing assessment summary, risk indicators, recommendations, and supporting information for future reference.",
    },

];

export default function UserManual() {

    return (

        <section
            id="manual"
            className="space-y-8 scroll-mt-28"
        >

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">

                User Manual

            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">

                Follow the steps below to perform a complete soil contamination
                assessment using AgriShield.

            </p>

            <div className="space-y-6">

                {steps.map((step, index) => (

                    <div
                        key={index}
                        className="
                            flex
                            gap-6
                            rounded-3xl
                            border
                            bg-white dark:bg-slate-900
                            p-8
                            shadow-sm
                        "
                    >

                        <div
                            className="
                                flex
                                h-14
                                w-14
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-green-700
                                text-xl
                                font-bold
                                text-white
                            "
                        >

                            {index + 1}

                        </div>

                        <div>

                            <h3 className="text-2xl font-bold">

                                {step.title}

                            </h3>

                            <p className="mt-3 leading-8 text-gray-600 dark:text-gray-400">

                                {step.description}

                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}