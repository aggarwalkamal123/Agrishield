"use client";

import {
    Database,
    ShieldCheck,
    BrainCircuit,
    FileText,
    ArrowRight,
    ArrowDown,
} from "lucide-react";

export default function WorkflowSection() {
    return (
        <section
            id="workflow"
            className="rounded-3xl bg-green-50 dark:bg-slate-800 p-10"
        >
            <h2 className="text-4xl font-black text-green-700">
                System Workflow
            </h2>

            <p className="mt-4 max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                AgriShield follows a sequential AI-assisted workflow that
                transforms raw soil information into contamination assessment,
                health risk evaluation, and intelligent recommendations.
            </p>

            <div className="mt-12 flex flex-col items-center gap-8">

                {/* ---------- Row 1 ---------- */}

                <div className="flex items-center justify-center gap-8">

                    {/* Card 1 */}

                    <div className="w-64 rounded-3xl border bg-white dark:bg-slate-900 p-6 text-center shadow-md dark:shadow-black/30 transition hover:-translate-y-1 hover:shadow-xl">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                            <Database className="h-10 w-10 text-green-700" />

                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">

                            Input

                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">

                            Soil properties and heavy metal concentrations

                        </p>

                    </div>

                    <ArrowRight className="h-8 w-8 text-green-600" />

                    {/* Card 2 */}

                    <div className="w-64 rounded-3xl border bg-white dark:bg-slate-900 p-6 text-center shadow-md dark:shadow-black/30 transition hover:-translate-y-1 hover:shadow-xl">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                            <ShieldCheck className="h-10 w-10 text-green-700" />

                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">

                            Risk Analysis

                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">

                            Pollution indices and bioavailability assessment

                        </p>

                    </div>

                    {/* Down Right */}

                    <ArrowRight className="h-8 w-8 text-green-600" />

                </div>


                {/* ---------- Row 2 ---------- */}

                <div className="flex items-center justify-center gap-8">

                    {/* Card 3 */}

                    <div className="w-64 rounded-3xl border bg-white dark:bg-slate-900 p-6 text-center shadow-md dark:shadow-black/30 transition hover:-translate-y-1 hover:shadow-xl">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                            <BrainCircuit className="h-10 w-10 text-green-700" />

                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">

                            AI Analysis

                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">

                            Gemini-powered intelligent recommendations

                        </p>

                    </div>

                    <ArrowRight className="h-8 w-8 text-green-600" />

                    {/* Card 4 */}

                    <div className="w-64 rounded-3xl border bg-white dark:bg-slate-900 p-6 text-center shadow-md dark:shadow-black/30 transition hover:-translate-y-1 hover:shadow-xl">

                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                            <FileText className="h-10 w-10 text-green-700" />

                        </div>

                        <h3 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">

                            Report

                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">

                            Dashboard and PDF report generation

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}