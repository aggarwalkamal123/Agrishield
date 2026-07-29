"use client";

import { FileText } from "lucide-react";

export default function DocumentationHero() {
    return (
        <section
            className="
                rounded-3xl
                bg-gradient-to-br
                from-green-50
                via-white
                to-green-100
                dark:from-slate-900
                dark:via-slate-950
                dark:to-slate-900
                px-10
                py-20
                shadow-sm
            "
        >
            <span
                className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-green-100
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-green-700
                "
            >
                <FileText className="h-4 w-4" />
                AgriShield Documentation
            </span>

            <h1
                className="
                    mt-6
                    text-6xl
                    font-black
                    tracking-tight
                    text-slate-900 dark:text-white
                "
            >
                Technical Documentation
            </h1>

            <p
                className="
                    mt-6
                    max-w-4xl
                    text-xl
                    leading-9
                    text-gray-600 dark:text-slate-300
                "
            >
                Complete technical documentation of the AI-powered Soil
                Contamination Assessment Platform including architecture,
                workflow, technology stack, APIs, database design, research
                references, and user manual.
            </p>
        </section>
    );
}