"use client";

import { CheckCircle2 } from "lucide-react";

export default function AssessmentSuccess() {

    return (

        <section className="rounded-3xl border border-green-200 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-14">

            <div className="flex flex-col items-center text-center">

                <CheckCircle2
                    className="h-24 w-24 text-green-600 animate-bounce"
                />

                <h2 className="mt-8 text-4xl font-bold text-green-700 dark:text-green-400">

                    Assessment Completed Successfully

                </h2>

                <p className="mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-400 dark:text-gray-300 leading-8">

                    Soil analysis has been completed successfully.
                    Preparing your dashboard...

                </p>

            </div>

        </section>

    );

}