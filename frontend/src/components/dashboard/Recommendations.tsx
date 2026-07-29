"use client";

import {
    ShieldCheck,
    Leaf,
    FlaskConical,
    Sprout,
    AlertTriangle,
    CheckCircle2,
} from "lucide-react";

interface Props {
    recommendations: string[];
}

const icons = [
    ShieldCheck,
    Leaf,
    FlaskConical,
    Sprout,
    AlertTriangle,
    CheckCircle2,
];

export default function Recommendations({ recommendations }: Props) {

    if (!recommendations || recommendations.length === 0) return null;

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">

                    Recommendations

                </h2>

                <p className="mt-2 text-gray-500">

                    Based on the current assessment, the following recommendations are suggested to improve soil quality, reduce contamination, and ensure safer agricultural production.

                </p>

            </div>

            <div className="grid gap-6">

                {recommendations.map((item, index) => {

                    const Icon = icons[index % icons.length];

                    return (

                        <div
                            key={index}
                            className="flex items-start gap-5 rounded-2xl border border-green-100 dark:border-slate-700 bg-green-50 dark:bg-slate-800 dark:bg-slate-800 p-5 transition hover:shadow-md dark:shadow-black/30"
                        >

                            <div className="rounded-xl bg-green-600 p-3 text-white">

                                <Icon className="h-6 w-6" />

                            </div>

                            <div>

                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">

                                    Recommendation {index + 1}

                                </h3>

                                <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                                    {item}

                                </p>

                            </div>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}