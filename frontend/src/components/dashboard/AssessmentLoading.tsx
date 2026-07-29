"use client";

import { Loader2, FlaskConical, ShieldCheck } from "lucide-react";

export default function AssessmentLoading() {
    return (
        <section className="rounded-3xl border border-green-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-12">

            <div className="flex flex-col items-center text-center">

                <div className="relative">

                    <div className="absolute inset-0 rounded-full bg-green-200 blur-2xl opacity-60" />

                    <Loader2 className="relative h-16 w-16 text-green-700 animate-spin" />

                </div>

                <h2 className="mt-8 text-3xl font-bold text-green-700 dark:text-green-400">

                    Running Soil Assessment...

                </h2>

                <p className="mt-5 max-w-2xl text-gray-600 dark:text-gray-400 dark:text-gray-300 leading-8">

                    Our AI-powered assessment engine is analysing the soil
                    properties, calculating pollution indices, evaluating
                    ecological and human health risks, generating visualizations,
                    and preparing personalized recommendations.

                </p>

                <div className="mt-10 grid gap-4 md:grid-cols-3 w-full max-w-4xl">

                    <div className="rounded-xl bg-green-50 dark:bg-slate-800 dark:bg-slate-800 p-5">

                        <FlaskConical className="mx-auto h-8 w-8 text-green-700 mb-3" />

                        <p className="font-medium">

                            Calculating Pollution Indices

                        </p>

                    </div>

                    <div className="rounded-xl bg-green-50 dark:bg-slate-800 dark:bg-slate-800 p-5">

                        <ShieldCheck className="mx-auto h-8 w-8 text-green-700 mb-3" />

                        <p className="font-medium">

                            Evaluating Health Risk

                        </p>

                    </div>

                    <div className="rounded-xl bg-green-50 dark:bg-slate-800 dark:bg-slate-800 p-5">

                        <Loader2 className="mx-auto h-8 w-8 text-green-700 animate-spin mb-3" />

                        <p className="font-medium">

                            Preparing Final Dashboard

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}