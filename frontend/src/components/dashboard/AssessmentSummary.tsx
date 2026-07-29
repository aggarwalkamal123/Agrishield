"use client";

interface Props {
    summary: string;
}

export default function AssessmentSummary({ summary }: Props) {
    return (
        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-6">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">
                    Assessment Summary
                </h2>

                <p className="mt-2 text-gray-500">
                    AI-generated overall interpretation of the submitted soil assessment.
                </p>

            </div>

            <div className="rounded-2xl bg-green-50 dark:bg-slate-800 dark:bg-slate-800 p-6 leading-8 text-gray-700 dark:text-gray-300 dark:text-gray-300 whitespace-pre-line">

                {summary}

            </div>

        </section>
    );
}