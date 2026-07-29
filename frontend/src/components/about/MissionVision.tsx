"use client";

import { Target, Globe2, Rocket } from "lucide-react";

export default function MissionVision() {

    return (

        <section
            className="
rounded-[40px]
bg-gradient-to-br
from-green-50
via-white
to-emerald-50
dark:from-slate-900
dark:via-slate-950
dark:to-slate-900
px-8
py-20
transition-colors
duration-300
"
        >

            <div className="mx-auto max-w-7xl text-center">

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-green-100 dark:bg-slate-800
                        px-6
                        py-2
                        text-sm
                        font-bold
                        text-green-700 dark:text-green-300
                    "
                >
                    🚀 Our Purpose
                </div>

                <h2
                    className="
                        mt-8
                        text-6xl
                        font-black
                        text-green-700 dark:text-green-400
                    "
                >
                    Mission • Vision • Objectives
                </h2>

                <p
                    className="
                        mx-auto
                        mt-8
                        max-w-5xl
                        text-xl
                        leading-10
                        text-gray-600 dark:text-gray-400
                    "
                >
                    AgriShield aims to bridge the gap between artificial
                    intelligence and sustainable agriculture by delivering
                    accurate, reliable, and intelligent soil contamination
                    assessment solutions.
                </p>

            </div>

            <div
                className="
                    mx-auto
                    mt-20
                    grid
                    max-w-7xl
                    gap-8
                    lg:grid-cols-3
                "
            >

                {/* Mission */}

                <div
                    className="
                        rounded-3xl
                        bg-white dark:bg-slate-900
                        p-10
                        shadow-lg dark:shadow-black/40
                        transition
                        hover:-translate-y-2
                        hover:shadow-xl
                    "
                >

                    <div
                        className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-2xl
                            bg-green-100
                        "
                    >
                        <Target
                            size={42}
                            className="text-green-700"
                        />
                    </div>

                    <h3 className="mt-8 text-5xl font-black text-green-700">

                        Our Mission

                    </h3>

                    <p className="mt-8 text-lg leading-10 text-gray-600 dark:text-gray-400">

                        To empower farmers, researchers and policymakers with
                        AI-driven heavy metal assessment tools that improve
                        food safety, environmental sustainability and smart
                        agricultural decision-making.

                    </p>

                </div>

                {/* Vision */}

                <div
                    className="
                        rounded-3xl
                        bg-white dark:bg-slate-900
                        p-10
                        shadow-lg dark:shadow-black/40
                        transition
                        hover:-translate-y-2
                        hover:shadow-xl
                    "
                >

                    <div
                        className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-100
                        "
                    >
                        <Globe2
                            size={42}
                            className="text-blue-700"
                        />
                    </div>

                    <h3 className="mt-8 text-5xl font-black text-blue-700">

                        Our Vision

                    </h3>

                    <p className="mt-8 text-lg leading-10 text-gray-600 dark:text-gray-400">

                        To become a trusted intelligent agricultural platform
                        capable of providing accurate soil health insights,
                        contamination prediction and sustainable farming
                        recommendations worldwide.

                    </p>

                </div>

                {/* Objectives */}

                <div
                    className="
                        rounded-3xl
                        bg-white dark:bg-slate-900
                        p-10
                        shadow-lg dark:shadow-black/40
                        transition
                        hover:-translate-y-2
                        hover:shadow-xl
                    "
                >

                    <div
                        className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-2xl
                            bg-yellow-100
                        "
                    >
                        <Rocket
                            size={42}
                            className="text-amber-600"
                        />
                    </div>

                    <h3 className="mt-8 text-5xl font-black text-amber-600">

                        Objectives

                    </h3>

                    <ul className="mt-8 space-y-5 text-lg leading-8 text-gray-700 dark:text-gray-300">

                        <li>✓ Heavy Metal Detection</li>

                        <li>✓ Pollution Index Assessment</li>

                        <li>✓ Food Safety Evaluation</li>

                        <li>✓ Human Health Risk Analysis</li>

                        <li>✓ AI Recommendation System</li>

                        <li>✓ Interactive Dashboard & Reports</li>

                    </ul>

                </div>

            </div>

        </section>

    );

}