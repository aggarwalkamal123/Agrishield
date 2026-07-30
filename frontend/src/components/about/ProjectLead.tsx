"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ProjectLead() {

    const responsibilities = [

        "Backend API Development",
        "Decision Engine Development",
        "Database Design & Integration",
        "Heavy Metal Assessment Models",
        "Gemini AI Integration",
        "Deployment & System Integration",

    ];

    return (

        <section className="py-20">

            <div className="mx-auto max-w-4xl text-center">

                <div
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-yellow-100
                        px-6
                        py-2
                        text-sm
                        font-bold
                        text-yellow-700
                    "
                >
                    👑 Leadership
                </div>

                <h2
                    className="
                        mt-8
                        text-5xl
                        font-black
                        text-green-700
                    "
                >
                    Meet Our Project Lead
                </h2>

            </div>

            <div
                className="
                    mx-auto
                    mt-14
                    max-w-4xl
                    overflow-hidden
                    rounded-[32px]
                    bg-white dark:bg-slate-900
                    shadow-2xl
                "
            >

                {/* Header */}

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        bg-green-600
                        px-8
                        py-10
                        text-center
                    "
                >

                    <Image
                        src="/team/kamal.jpg"
                        alt="Project Lead"
                        width={140}
                        height={140}
                        className="rounded-full border-4 border-white shadow-lg dark:shadow-black/40"
                    />

                    <span
                        className="
                            mt-6
                            rounded-full
                            bg-yellow-400
                            px-5
                            py-2
                            text-sm
                            font-bold
                            text-yellow-900
                        "
                    >
                        ⭐ PROJECT LEAD
                    </span>

                    <h3
                        className="
                            mt-6
                            text-4xl
                            font-black
                            text-white
                        "
                    >
                        Kamal Aggarwal
                    </h3>

                    <p className="mt-2 text-xl text-green-100">

                        AI & Backend Developer

                    </p>

                    <div
                        className="
        mt-8
        flex
        items-center
        justify-center
        gap-4
    "
                    >

                        <a
                            href="https://github.com/aggarwalkamal123"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-white dark:bg-slate-900
            px-5
            py-3
            font-semibold
            text-green-700
            transition
            hover:bg-green-50 dark:bg-slate-800
        "
                        >

                            <FaGithub size={18} />

                            GitHub

                        </a>

                        <a
                            href="https://www.linkedin.com/in/kamal-aggarwal-18923127a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
            flex
            items-center
            gap-2
            rounded-xl
            border-2
            border-white
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:bg-white dark:bg-slate-900
            hover:text-green-700
        "
                        >

                            <FaLinkedin size={18} />

                            LinkedIn

                        </a>

                    </div>

                </div>

                {/* Body */}

                <div className="p-8">

                    <h3
                        className="
                            text-2xl
                            font-black
                            text-green-700
                        "
                    >
                        Responsibilities
                    </h3>

                    <div className="mt-6 space-y-3">

                        {responsibilities.map((item) => (

                            <div
                                key={item}
                                className="
                                    rounded-2xl
                                    bg-green-50 dark:bg-slate-800
                                    px-5
                                    py-4
                                    text-base
                                    font-medium
                                    text-gray-700 dark:text-gray-300
                                "
                            >
                                ✓ {item}
                            </div>

                        ))}

                    </div>

                    <div
                        className="
                            mt-8
                            rounded-3xl
                            bg-yellow-50
                            p-6
                            text-center
                        "
                    >

                        <h4
                            className="
                                text-xl
                                font-bold
                                text-yellow-700
                            "
                        >
                            🏆 Outstanding Contribution
                        </h4>

                        <p
                            className="
                                mt-4
                                text-base
                                leading-8
                                text-gray-700 dark:text-gray-500
                            "
                        >
                            Led the complete development of AgriShield,
                            including backend architecture, AI integration,
                            pollution assessment models, health risk analysis,
                            database design, REST APIs, PDF report generation,
                            and deployment of the intelligent decision support
                            platform.
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}