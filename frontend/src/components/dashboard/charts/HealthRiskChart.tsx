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
        group: string;
        actual: number;
        safe_limit: number;
        status: string;
    }[];
}

export default function HealthRiskChart({ data }: Props) {

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
                    Human Health Risk
                </h2>

                <p className="mt-2 text-gray-500">
                    Comparison of calculated Hazard Index (HI) with the safe threshold.
                </p>

            </div>

            <div className="h-[420px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 20,
                            left: 10,
                            bottom: 5,
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="group" />

                        <YAxis />

                        <Tooltip />

                        <Legend />

                        <Bar
                            dataKey="actual"
                            name="Hazard Index"
                            fill="#16a34a"
                            radius={[6, 6, 0, 0]}
                        />

                        <Bar
                            dataKey="safe_limit"
                            name="Safe Limit"
                            fill="#ef4444"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

}