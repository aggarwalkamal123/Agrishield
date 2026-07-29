"use client";

interface Props {
    data: {
        label: string;
        ph_category: string;
        reason: string;
    };
}

export default function BioavailabilityCard({ data }: Props) {

    const getColor = (label: string) => {

        switch (label.toLowerCase()) {

            case "very high":
                return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

            case "high":
                return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";

            case "moderate":
                return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

            case "low":
                return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

            default:
                return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";

        }

    };

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">

                    Bioavailability Assessment

                </h2>

                <p className="mt-2 text-gray-500">

                    Estimated mobility and availability of heavy metals in the soil based on soil properties.

                </p>

            </div>

            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">

                {/* Left */}

                <div className="rounded-2xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-green-50 dark:bg-slate-800 dark:bg-slate-800 p-6 flex flex-col justify-center">

                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">

                        Bioavailability Level

                    </p>

                    <div
                        className={`mt-5 inline-flex w-fit rounded-full px-5 py-2 text-lg font-bold ${getColor(data.label)}`}
                    >
                        {data.label}
                    </div>

                    <div className="mt-8">

                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">

                            Soil pH Category

                        </p>

                        <p className="mt-3 text-2xl font-bold text-green-700 dark:text-green-400">

                            {data.ph_category}

                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="rounded-2xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 dark:bg-slate-800 p-6">

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">

                        Interpretation

                    </h3>

                    <p className="mt-5 leading-8 text-gray-700 dark:text-gray-300 dark:text-gray-300 whitespace-pre-line">

                        {data.reason}

                    </p>

                </div>

            </div>

        </section>

    );

}