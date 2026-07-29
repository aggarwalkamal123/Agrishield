"use client";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="relative flex h-[95vh] items-center justify-center overflow-hidden"
            style={{
                backgroundImage:
                    "url('farmland.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}

            <div className="relative z-10 mx-auto max-w-5xl px-5 text-center text-white">

                <span className="rounded-full border border-green-300/50 bg-green-500/20 px-5 py-2 text-sm font-semibold tracking-wide backdrop-blur-sm">

                    AI Powered Sustainable Agriculture Platform

                </span>

                <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">

                    AgriShield

                </h1>

                <h2 className="mt-5 text-2xl font-semibold text-green-200 md:text-3xl">

                    Heavy Metal Risk Assessment &
                    <br />
                    Decision Support System

                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">

                    AgriShield is an AI-powered platform designed to evaluate heavy
                    metal contamination in agricultural soils. By combining scientific
                    pollution indices, health risk assessment, and intelligent decision
                    support, it helps farmers, researchers, and policymakers make safer
                    and more sustainable agricultural decisions.

                </p>

                <div className="mt-12 flex flex-wrap justify-center gap-5">

                    <Link
                        href="/assessment"
                        className="rounded-xl bg-green-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-green-700 hover:scale-105"
                    >
                        Start Assessment
                    </Link>

                    <Link
                        href="/documentation"
                        className="rounded-xl border border-white/40 bg-white/15 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/25"
                    >
                        Learn More
                    </Link>

                </div>

            </div>

            {/* Bottom Gradient */}
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/20" />
        </section>
    );
}