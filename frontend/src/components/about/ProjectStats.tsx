"use client";

import {
    Brain,
    Database,
    FileCode2,
    BookOpen,
    ShieldCheck,
    Users,
    Globe,
    Cpu,
} from "lucide-react";

const stats = [

    {
        icon: Brain,
        title: "AI Models",
        value: "Gemini AI",
        color: "bg-green-100 text-green-700",
    },

    {
        icon: Database,
        title: "Database Tables",
        value: "8 Tables",
        color: "bg-blue-100 text-blue-700",
    },

    {
        icon: FileCode2,
        title: "Backend APIs",
        value: "15+ APIs",
        color: "bg-purple-100 text-purple-700",
    },

    {
        icon: BookOpen,
        title: "Research Papers",
        value: "10 Papers",
        color: "bg-orange-100 text-orange-700",
    },

    {
        icon: ShieldCheck,
        title: "Assessment Modules",
        value: "6 Modules",
        color: "bg-red-100 text-red-700",
    },

    {
        icon: Cpu,
        title: "Technologies",
        value: "15+ Tools",
        color: "bg-cyan-100 text-cyan-700",
    },

    {
        icon: Users,
        title: "Team Members",
        value: "7 Members",
        color: "bg-yellow-100 text-yellow-700",
    },

    {
        icon: Globe,
        title: "Platform",
        value: "Web Based",
        color: "bg-pink-100 text-pink-700",
    },

];

export default function ProjectStats() {

    return (

        <section className="py-24">

            <div className="mx-auto max-w-7xl">

                <div className="text-center">

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-green-100
                            px-6
                            py-2
                            text-sm
                            font-bold
                            text-green-700
                        "
                    >
                        📊 Project Overview
                    </div>

                    <h2
                        className="
                            mt-8
                            text-6xl
                            font-black
                            text-green-700
                        "
                    >
                        AgriShield at a Glance
                    </h2>

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
                        AgriShield integrates Artificial Intelligence,
                        environmental pollution assessment, food safety
                        evaluation, and modern web technologies into a
                        comprehensive intelligent decision support system for
                        agricultural soil contamination analysis.
                    </p>

                </div>

                <div
                    className="
                        mt-16
                        grid
                        gap-8
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                key={item.title}
                                className="
                                    rounded-[30px]
                                    bg-white dark:bg-slate-900
                                    p-10
                                    text-center
                                    shadow-lg dark:shadow-black/40
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:shadow-2xl
                                "
                            >

                                <div
                                    className={`
                                        mx-auto
                                        flex
                                        h-20
                                        w-20
                                        items-center
                                        justify-center
                                        rounded-full
                                        ${item.color}
                                    `}
                                >

                                    <Icon size={36} />

                                </div>

                                <h3
                                    className="
                                        mt-8
                                        text-4xl
                                        font-black
                                        text-slate-900 dark:text-white
                                    "
                                >
                                    {item.value}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-lg
                                        font-medium
                                        text-gray-600 dark:text-gray-400
                                    "
                                >
                                    {item.title}
                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );

}