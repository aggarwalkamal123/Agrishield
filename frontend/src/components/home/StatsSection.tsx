import {
    FlaskConical,
    ShieldCheck,
    BarChart3,
    FileSpreadsheet,
    BrainCircuit,
    Leaf,
} from "lucide-react";

const stats = [
    {
        icon: FlaskConical,
        number: "10+",
        title: "Heavy Metals",
        description:
            "Supports assessment of major toxic heavy metals including Pb, Cd, As, Cr, Hg, Ni, Cu, Zn and others.",
    },
    {
        icon: ShieldCheck,
        number: "8+",
        title: "Scientific Indices",
        description:
            "Calculates internationally accepted pollution, ecological risk and health hazard indices.",
    },
    {
        icon: BrainCircuit,
        number: "AI",
        title: "Powered Analysis",
        description:
            "AI-generated assessment summaries and recommendations make scientific reports easy to understand.",
    },
    {
        icon: BarChart3,
        number: "4",
        title: "Interactive Charts",
        description:
            "Visual dashboards simplify comparison, interpretation and decision making.",
    },
    {
        icon: FileSpreadsheet,
        number: "CSV",
        title: "Data Import",
        description:
            "Upload laboratory heavy metal concentration data directly using CSV or manual entry.",
    },
    {
        icon: Leaf,
        number: "100%",
        title: "Farmer Focused",
        description:
            "Designed to support safer agriculture, sustainable farming and improved food quality.",
    },
];

export default function StatsSection() {
    return (
        <section className="bg-gradient-to-br from-green-700 via-emerald-700 to-green-900 py-24 text-white">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <h2 className="text-4xl font-bold">

                        AgriShield at a Glance

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-green-100">

                        Combining Artificial Intelligence, environmental science
                        and interactive visualization into one comprehensive
                        decision support platform.

                    </p>

                </div>

                {/* Stats */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {stats.map((item, index) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={index}
                                className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/20"
                            >

                                <div className="mb-6 inline-flex rounded-2xl bg-white/15 p-4">

                                    <Icon className="h-8 w-8" />

                                </div>

                                <h3 className="text-5xl font-extrabold">

                                    {item.number}

                                </h3>

                                <h4 className="mt-3 text-2xl font-bold">

                                    {item.title}

                                </h4>

                                <p className="mt-5 leading-7 text-green-100">

                                    {item.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}