import {
    ShieldCheck,
    Brain,
    BarChart3,
    FlaskConical,
    Leaf,
    Globe,
} from "lucide-react";

const reasons = [
    {
        icon: ShieldCheck,
        title: "Scientifically Reliable",
        description:
            "Assessment is based on internationally accepted pollution indices, environmental risk models and food safety guidelines.",
    },
    {
        icon: Brain,
        title: "AI Assisted Decision Making",
        description:
            "Artificial Intelligence transforms complex environmental calculations into simple, understandable recommendations for users.",
    },
    {
        icon: BarChart3,
        title: "Interactive Visualization",
        description:
            "Beautiful dashboards, graphs and summary cards make scientific data easy to interpret for farmers, researchers and policymakers.",
    },
    {
        icon: FlaskConical,
        title: "Multiple Pollution Indicators",
        description:
            "Analyze contamination using Contamination Factor (CF), Geo-Accumulation Index (Igeo), Ecological Risk (PERI), PLI, NPI and health hazard indices.",
    },
    {
        icon: Leaf,
        title: "Crop Specific Assessment",
        description:
            "Recommendations are generated according to the selected crop and its heavy metal bioaccumulation characteristics.",
    },
    {
        icon: Globe,
        title: "Supports Sustainable Agriculture",
        description:
            "Promotes safer farming practices, healthier food production and environmentally responsible agricultural management.",
    },
];

export default function WhyChooseUsSection() {
    return (
        <section className="bg-white dark:bg-slate-900 py-24 dark:bg-slate-950">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                        Why AgriShield?
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
                        Why Choose AgriShield
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 dark:text-gray-300">
                        AgriShield combines Artificial Intelligence, environmental science
                        and intuitive visualization to provide an accurate and practical
                        heavy metal risk assessment platform.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {reasons.map((reason, index) => {

                        const Icon = reason.icon;

                        return (

                            <div
                                key={index}
                                className="group rounded-3xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 shadow-md dark:shadow-black/30 transition-all duration-300 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
                            >

                                <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 transition group-hover:bg-green-600 dark:bg-green-900/40">

                                    <Icon className="h-8 w-8 text-green-700 transition group-hover:text-white" />

                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">

                                    {reason.title}

                                </h3>

                                <p className="leading-7 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                                    {reason.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}