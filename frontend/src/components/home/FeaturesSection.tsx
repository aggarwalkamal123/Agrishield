import {
    Brain,
    FlaskConical,
    FileSpreadsheet,
    BarChart3,
    ShieldCheck,
    FileText,
    Sprout,
    Cpu,
} from "lucide-react";

const features = [
    {
        icon: Brain,
        title: "AI Powered Assessment",
        description:
            "Advanced AI analyzes heavy metal contamination and generates easy-to-understand assessment summaries and recommendations.",
    },
    {
        icon: FlaskConical,
        title: "Heavy Metal Risk Analysis",
        description:
            "Evaluate contamination levels using internationally accepted pollution indices such as CF, EF, Igeo, PLI, NPI and PERI.",
    },
    {
        icon: Sprout,
        title: "Crop Specific Evaluation",
        description:
            "Risk calculations automatically adapt according to the selected crop and its heavy metal bioaccumulation behaviour.",
    },
    {
        icon: ShieldCheck,
        title: "Food Safety Assessment",
        description:
            "Determine whether agricultural produce is safe for consumption based on heavy metal concentration and health risk indices.",
    },
    {
        icon: BarChart3,
        title: "Interactive Dashboard",
        description:
            "Visualize pollution levels, health risks, heavy metal contribution and environmental indicators through intuitive charts.",
    },
    {
        icon: Cpu,
        title: "Decision Support System",
        description:
            "Transform complex scientific calculations into practical recommendations for farmers, researchers and policymakers.",
    },
    {
        icon: FileSpreadsheet,
        title: "CSV & Manual Input",
        description:
            "Upload laboratory reports using CSV files or manually enter heavy metal concentrations for instant analysis.",
    },
    {
        icon: FileText,
        title: "Comprehensive Reports",
        description:
            "Generate professional reports containing pollution assessment, health evaluation, AI explanations and actionable insights.",
    },
];

export default function FeaturesSection() {
    return (
        <section className="bg-white dark:bg-slate-900 py-24 dark:bg-slate-950">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                        Platform Features
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
                        Everything You Need for Heavy Metal Risk Assessment
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 dark:text-gray-300">
                        AgriShield combines Artificial Intelligence, environmental science,
                        health risk assessment and interactive visualization into a single,
                        easy-to-use platform.
                    </p>

                </div>

                {/* Feature Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={index}
                                className="group rounded-3xl border border-green-100 bg-white dark:bg-slate-900 p-8 shadow-md dark:shadow-black/30 transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
                            >

                                <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 transition group-hover:bg-green-600 dark:bg-green-900/40">

                                    <Icon className="h-8 w-8 text-green-700 transition group-hover:text-white" />

                                </div>

                                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">

                                    {feature.title}

                                </h3>

                                <p className="leading-7 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                                    {feature.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}