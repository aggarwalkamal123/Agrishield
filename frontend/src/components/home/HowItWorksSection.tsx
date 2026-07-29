import {
    UploadCloud,
    Database,
    Cpu,
    BarChart3,
    FileCheck,
} from "lucide-react";

const steps = [
    {
        icon: UploadCloud,
        title: "Upload Soil Data",
        description:
            "Upload heavy metal concentration data using a CSV file or manually enter values. Select the crop and provide basic soil properties such as pH, organic matter and texture.",
    },
    {
        icon: Database,
        title: "Data Validation",
        description:
            "AgriShield validates the uploaded data, verifies heavy metal names, removes inconsistencies and prepares the information for scientific analysis.",
    },
    {
        icon: Cpu,
        title: "AI & Scientific Analysis",
        description:
            "The backend computes contamination indices, ecological risk, food safety indicators, health hazard indices and AI-generated explanations using validated scientific models.",
    },
    {
        icon: BarChart3,
        title: "Interactive Dashboard",
        description:
            "All results are presented through beautiful charts, summary cards, pollution indicators and health-risk visualizations for easy understanding.",
    },
    {
        icon: FileCheck,
        title: "Recommendations & Report",
        description:
            "Receive crop-specific recommendations, AI-generated assessment summaries and a professional report that can be downloaded and shared.",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="bg-gradient-to-b from-green-50 to-white py-24 dark:from-slate-900 dark:to-slate-950">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-20 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                        Workflow
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
                        How AgriShield Works
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 dark:text-gray-300">
                        From uploading laboratory data to generating AI-powered
                        recommendations, AgriShield completes the entire assessment
                        in just a few simple steps.
                    </p>

                </div>

                {/* Timeline */}

                <div className="relative">

                    {/* Horizontal Line */}

                    <div className="absolute left-0 right-0 top-16 hidden h-1 bg-green-200 lg:block dark:bg-slate-700"></div>

                    <div className="grid gap-10 lg:grid-cols-5">

                        {steps.map((step, index) => {

                            const Icon = step.icon;

                            return (

                                <div
                                    key={index}
                                    className="relative text-center"
                                >

                                    {/* Number */}

                                    <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white shadow-lg dark:shadow-black/40">

                                        {index + 1}

                                    </div>

                                    {/* Icon */}

                                    <div className="mx-auto mt-8 flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-slate-900 shadow-xl ring-4 ring-green-100 dark:bg-slate-900 dark:ring-slate-700">

                                        <Icon className="h-10 w-10 text-green-600" />

                                    </div>

                                    {/* Content */}

                                    <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">

                                        {step.title}

                                    </h3>

                                    <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                                        {step.description}

                                    </p>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}