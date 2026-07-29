"use client";

interface Props {
    data: {
        soil_pollution: string;
        food_safety: string;
        adult_health: string;
        child_health: string;
        economic_impact: string;
        overall_risk: string;
    };
}

export default function OverallCards({ data }: Props) {

    const cards = [

        {
            title: "Soil Pollution",
            value: data.soil_pollution,
        },

        {
            title: "Food Safety",
            value: data.food_safety,
        },

        {
            title: "Adult Health",
            value: data.adult_health,
        },

        {
            title: "Child Health",
            value: data.child_health,
        },

        {
            title: "Economic Impact",
            value: data.economic_impact,
        },

        {
            title: "Overall Risk",
            value: data.overall_risk,
        },

    ];

    function getColor(value: string) {

        const text = value.toLowerCase();

        if (
            text.includes("very high") ||
            text.includes("critical") ||
            text.includes("severe")
        ) {

            return "bg-red-100 text-red-700 border-red-300 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800";

        }

        if (
            text.includes("high")
        ) {

            return "bg-orange-100 text-orange-700 border-orange-300 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800";

        }

        if (
            text.includes("moderate") ||
            text.includes("medium")
        ) {

            return "bg-yellow-100 text-yellow-700 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800";

        }

        if (
            text.includes("low") ||
            text.includes("safe")
        ) {

            return "bg-green-100 text-green-700 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800";

        }

        return "bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";

    }

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">

                    Overall Assessment

                </h2>

                <p className="mt-2 text-gray-500">

                    Final interpretation of contamination, health impact, food safety and economic risk.

                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {cards.map((card) => (

                    <div
                        key={card.title}
                        className="rounded-2xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 dark:bg-slate-800 p-6 transition hover:shadow-lg dark:shadow-black/40"
                    >

                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">

                            {card.title}

                        </p>

                        <div
                            className={`mt-5 inline-flex rounded-full border px-5 py-2 text-lg font-bold ${getColor(card.value)}`}
                        >

                            {card.value}

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}