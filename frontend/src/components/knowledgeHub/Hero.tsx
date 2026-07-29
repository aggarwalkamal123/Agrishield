"use client";

export default function Hero() {

    return (

        <section className="rounded-[40px] bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-green-100 px-12 py-20 shadow-sm">

            <div className="max-w-4xl">

                <div className="inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">

                    📚 AgriShield Knowledge Hub

                </div>

                <h1 className="mt-8 text-6xl font-black tracking-tight text-slate-900 dark:text-white">

                    Featured Articles

                </h1>

                <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-300">

                    Explore scientific knowledge about heavy metal contamination,
                    environmental pollution, artificial intelligence in agriculture,
                    food safety, GIS & remote sensing, sustainable farming
                    practices, and modern soil remediation technologies.

                </p>

            </div>

        </section>

    );

}