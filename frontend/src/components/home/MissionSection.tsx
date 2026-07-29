import {
    Target,
    Eye,
    Leaf,
    ShieldCheck,
} from "lucide-react";

export default function MissionSection() {
    return (
        <section className="bg-gradient-to-b from-green-50 to-white py-24 dark:from-slate-900 dark:to-slate-950">

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/40 dark:text-green-300">
                        Our Purpose
                    </span>

                    <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
                        Building Safer Agriculture Through Data and Artificial Intelligence
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 dark:text-gray-300">
                        AgriShield is designed to bridge the gap between laboratory soil
                        analysis and practical agricultural decision-making. Our goal is to
                        make scientific risk assessment simple, understandable, and
                        accessible for everyone.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2">

                    {/* Mission */}

                    <div className="rounded-3xl border border-green-100 bg-white dark:bg-slate-900 p-10 shadow-lg dark:shadow-black/40 transition hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

                        <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 dark:bg-green-900/30">

                            <Target className="h-8 w-8 text-green-700 dark:text-green-400" />

                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Our Mission
                        </h3>

                        <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                            To empower farmers, researchers, and agricultural professionals
                            with an intelligent decision support system that identifies heavy
                            metal contamination, evaluates environmental and human health
                            risks, and recommends scientifically validated mitigation
                            strategies for sustainable farming.

                        </p>

                    </div>

                    {/* Vision */}

                    <div className="rounded-3xl border border-green-100 bg-white dark:bg-slate-900 p-10 shadow-lg dark:shadow-black/40 transition hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900">

                        <div className="mb-6 inline-flex rounded-2xl bg-green-100 p-4 dark:bg-green-900/30">

                            <Eye className="h-8 w-8 text-green-700 dark:text-green-400" />

                        </div>

                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Our Vision
                        </h3>

                        <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                            To become a trusted AI-powered agricultural platform that
                            promotes safe food production, protects public health, and
                            supports sustainable environmental management through modern
                            technology and scientific innovation.

                        </p>

                    </div>

                </div>

                {/* Objectives */}

                <div className="mt-20">

                    <h3 className="mb-10 text-center text-3xl font-bold text-gray-900 dark:text-white">

                        Core Objectives

                    </h3>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-2xl border border-green-100 bg-white dark:bg-slate-900 p-8 text-center shadow-md dark:shadow-black/30 dark:border-slate-700 dark:bg-slate-900">

                            <Leaf className="mx-auto mb-5 h-10 w-10 text-green-600" />

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                Sustainable Farming
                            </h4>

                            <p className="mt-4 text-gray-600 dark:text-gray-400 dark:text-gray-300">
                                Encourage environmentally responsible agricultural practices
                                using scientific evidence.
                            </p>

                        </div>

                        <div className="rounded-2xl border border-green-100 bg-white dark:bg-slate-900 p-8 text-center shadow-md dark:shadow-black/30 dark:border-slate-700 dark:bg-slate-900">

                            <ShieldCheck className="mx-auto mb-5 h-10 w-10 text-green-600" />

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                Food Safety
                            </h4>

                            <p className="mt-4 text-gray-600 dark:text-gray-400 dark:text-gray-300">
                                Protect consumers by identifying potential heavy metal risks in
                                agricultural soils before cultivation.
                            </p>

                        </div>

                        <div className="rounded-2xl border border-green-100 bg-white dark:bg-slate-900 p-8 text-center shadow-md dark:shadow-black/30 dark:border-slate-700 dark:bg-slate-900">

                            <Target className="mx-auto mb-5 h-10 w-10 text-green-600" />

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                Scientific Decision Support
                            </h4>

                            <p className="mt-4 text-gray-600 dark:text-gray-400 dark:text-gray-300">
                                Convert complex environmental calculations into clear,
                                actionable recommendations for users.
                            </p>

                        </div>

                        <div className="rounded-2xl border border-green-100 bg-white dark:bg-slate-900 p-8 text-center shadow-md dark:shadow-black/30 dark:border-slate-700 dark:bg-slate-900">

                            <Eye className="mx-auto mb-5 h-10 w-10 text-green-600" />

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                AI Assisted Insights
                            </h4>

                            <p className="mt-4 text-gray-600 dark:text-gray-400 dark:text-gray-300">
                                Simplify environmental assessment using Artificial Intelligence,
                                interactive dashboards, and intelligent reporting.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}