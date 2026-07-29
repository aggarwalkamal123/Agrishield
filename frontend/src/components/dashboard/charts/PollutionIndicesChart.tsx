"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Cell,
} from "recharts";

interface Props {
    data: {
        index: string;
        value: number;
        label: string;
    }[];
}

const COLORS = [
    "#16a34a",
    "#22c55e",
    "#84cc16",
    "#f59e0b",
    "#f97316",
    "#dc2626",
];

export default function PollutionIndicesChart({ data }: Props) {

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
                    Pollution Indices
                </h2>

                <p className="mt-2 text-gray-500">
                    Overall pollution and health risk indicators calculated from heavy metal concentrations.
                </p>

            </div>

            <div className="h-[420px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        layout="vertical"
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 30,
                            bottom: 10,
                        }}
                    >

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis
                            type="number"
                        />

                        <YAxis
                            dataKey="index"
                            type="category"
                            width={120}
                        />

                        <Tooltip
                            formatter={(value: number, name, props: any) => [
                                value,
                                props.payload.label,
                            ]}
                        />

                        <Bar
                            dataKey="value"
                            radius={[0, 8, 8, 0]}
                        >

                            {data.map((_, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />

                            ))}

                        </Bar>

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

}