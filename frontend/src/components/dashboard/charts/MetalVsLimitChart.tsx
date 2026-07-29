"use client";

import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
} from "recharts";

interface Props {
    data: {
        metal: string;
        soil: number;
        limit: number;
    }[];
}

export default function MetalVsLimitChart({ data }: Props) {

    // Remove Iron (Fe) from chart
    const chartData = data.filter(
        (item) => item.metal.toUpperCase() !== "FE"
    );

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
                    Heavy Metal Concentration vs WHO Limit
                </h2>

                <p className="mt-2 text-gray-500">
                    Comparison of observed heavy metal concentrations with WHO permissible limits.
                </p>

            </div>

            <div className="h-[420px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        data={chartData}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 10,
                            bottom: 5,
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            dataKey="metal"
                        />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Bar
                            dataKey="soil"
                            name="Observed"
                            fill="#16a34a"
                            radius={[6, 6, 0, 0]}
                        />

                        <Bar
                            dataKey="limit"
                            name="WHO Limit"
                            fill="#f97316"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

}