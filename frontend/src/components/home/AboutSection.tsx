export default function AboutSection() {
    return (
        <section className="bg-white dark:bg-slate-900 py-24 dark:bg-slate-950">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left */}

                    <div>

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">

                            About AgriShield

                        </span>

                        <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">

                            Intelligent Soil Risk Assessment for
                            Sustainable Agriculture

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                            Heavy metal contamination in agricultural soils has become one of
                            the most serious environmental challenges worldwide. Excessive
                            concentrations of toxic metals such as Lead (Pb), Cadmium (Cd),
                            Arsenic (As), Chromium (Cr), Mercury (Hg), and Nickel (Ni) can
                            reduce crop productivity, contaminate food, and pose severe
                            health risks to humans.

                        </p>

                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                            AgriShield combines scientific pollution indices, WHO safety
                            standards, health risk assessment, and Artificial Intelligence
                            to transform complex laboratory data into meaningful insights.
                            The platform provides instant recommendations, interactive
                            dashboards, and downloadable reports that support informed
                            agricultural decision-making.

                        </p>

                    </div>

                    {/* Right */}

                    <div className="grid grid-cols-2 gap-6">

                        <div className="rounded-2xl border border-green-100 bg-green-50 dark:bg-slate-800 p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

                            <h3 className="text-4xl font-extrabold text-green-700 dark:text-green-400">

                                12+

                            </h3>

                            <p className="mt-3 font-medium text-gray-700 dark:text-gray-300 dark:text-gray-300">

                                Heavy Metals Supported

                            </p>

                        </div>

                        <div className="rounded-2xl border border-green-100 bg-green-50 dark:bg-slate-800 p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

                            <h3 className="text-4xl font-extrabold text-green-700 dark:text-green-400">

                                8+

                            </h3>

                            <p className="mt-3 font-medium text-gray-700 dark:text-gray-300 dark:text-gray-300">

                                Scientific Pollution Indices

                            </p>

                        </div>

                        <div className="rounded-2xl border border-green-100 bg-green-50 dark:bg-slate-800 p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

                            <h3 className="text-4xl font-extrabold text-green-700 dark:text-green-400">

                                WHO

                            </h3>

                            <p className="mt-3 font-medium text-gray-700 dark:text-gray-300 dark:text-gray-300">

                                Safety Standards Followed

                            </p>

                        </div>

                        <div className="rounded-2xl border border-green-100 bg-green-50 dark:bg-slate-800 p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

                            <h3 className="text-4xl font-extrabold text-green-700 dark:text-green-400">

                                AI

                            </h3>

                            <p className="mt-3 font-medium text-gray-700 dark:text-gray-300 dark:text-gray-300">

                                Decision Support Engine

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}