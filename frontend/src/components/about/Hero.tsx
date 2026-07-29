"use client";

import { Leaf } from "lucide-react";

export default function Hero() {

    return (

        <section
            className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-green-100
            dark:border-slate-700
            bg-gradient-to-br
            from-green-50
            via-white
            to-emerald-50
            dark:from-slate-900
            dark:via-slate-950
            dark:to-slate-900
            px-8
            py-24
            text-center
            transition-colors
            duration-300
            "
        >

            {/* Background Blur */}

            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

            <div className="relative mx-auto max-w-5xl">

                <div
                    className="
                        mx-auto
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
                    <Leaf size={16} />

                    About AgriShield

                </div>

                <h1
                    className="
                        mt-8
                        text-6xl
                        font-black
                        leading-tight
                        tracking-tight
                        text-green-700 dark:text-green-300
                    "
                >
                    Building AI for
                    <br />
                    Sustainable Agriculture
                </h1>

                <p
                    className="
                        mx-auto
                        mt-8
                        max-w-4xl
                        text-xl
                        leading-10
                        text-gray-600 dark:text-gray-400
                    "
                >
                    AgriShield is an AI-powered decision support platform
                    developed to assess heavy metal contamination in
                    agricultural soil, evaluate food safety and health risks,
                    and generate intelligent recommendations that promote
                    sustainable farming practices.
                </p>

                <div
                    className="
                        mt-12
                        flex
                        flex-wrap
                        items-center
                        justify-center
                        gap-10
                    "
                >

                    <div>

                        <h2 className="text-5xl font-black text-green-700">
                            10+
                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Heavy Metals Supported
                        </p>

                    </div>

                    <div>

                        <h2 className="text-5xl font-black text-green-700">
                            9
                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Pollution Indices
                        </p>

                    </div>

                    <div>

                        <h2 className="text-5xl font-black text-green-700">
                            AI
                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Gemini Powered
                        </p>

                    </div>

                    <div>

                        <h2 className="text-5xl font-black text-green-700">
                            PDF
                        </h2>

                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Smart Report Generation
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}