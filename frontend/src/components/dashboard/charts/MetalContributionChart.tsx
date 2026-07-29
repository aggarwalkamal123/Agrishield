"use client";

import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";

interface Props {
    data: {
        metal: string;
        percentage: number;
        er: number | null;
    }[];
}

const COLORS = [
    "#16a34a",
    "#22c55e",
    "#84cc16",
    "#f59e0b",
    "#ef4444",
    "#3b82f6",
];

export default function MetalContributionChart({ data }: Props) {

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">

                    Heavy Metal Contribution

                </h2>

                <p className="mt-2 text-gray-500">

                    Percentage contribution of each heavy metal towards the overall ecological risk (PERI).

                </p>

            </div>

            <div className="h-[430px]">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="percentage"
                            nameKey="metal"
                            cx="50%"
                            cy="50%"
                            innerRadius={90}
                            outerRadius={150}
                            paddingAngle={3}
                            label={({ metal, percentage }) =>
                                `${metal} (${percentage.toFixed(1)}%)`
                            }
                        >

                            {data.map((_, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))}

                        </Pie>

                        <Tooltip
                            formatter={(value: number) => [
                                `${value.toFixed(2)} %`,
                                "Contribution",
                            ]}
                        />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </section>

    );
}