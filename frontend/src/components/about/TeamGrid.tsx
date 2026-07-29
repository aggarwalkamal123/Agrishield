"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { teamMembers } from "@/lib/team";

export default function TeamGrid() {

    return (

        <section className="py-20">

            <div className="mx-auto max-w-7xl text-center">

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
                    👥 Our Team
                </div>

                <h2 className="mt-8 text-6xl font-black text-green-700">

                    Meet Our Amazing Team

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
                    AgriShield is developed through collaboration between
                    talented students specializing in Artificial Intelligence,
                    Web Development, Database Systems, Documentation and
                    Research.
                </p>

            </div>

            <div
                className="
                    mx-auto
                    mt-16
                    grid
                    max-w-7xl
                    gap-10
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {teamMembers.map((member) => (

                    <div
                        key={member.name}
                        className="
                            rounded-[32px]
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

                        <Image
                            src={member.image}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="
                                mx-auto
                                rounded-full
                                border-4
                                border-green-100
                                shadow-lg dark:shadow-black/40
                            "
                        />

                        <h3 className="mt-8 text-4xl font-black">

                            {member.name}

                        </h3>

                        <p
                            className="
                                mt-3
                                font-bold
                                text-green-700
                            "
                        >
                            {member.role}
                        </p>

                        <p
                            className="
                                mt-8
                                text-lg
                                leading-8
                                text-gray-600 dark:text-gray-400
                            "
                        >
                            {member.contribution}
                        </p>

                        <div
                            className="
                                mt-10
                                flex
                                justify-center
                                gap-4
                            "
                        >

                            <a
                                href={member.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-green-600
                                    px-5
                                    py-3
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-green-700
                                "
                            >

                                <FaGithub size={18} />

                                GitHub

                            </a>

                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border-2
                                    border-green-600
                                    px-5
                                    py-3
                                    font-semibold
                                    text-green-700
                                    transition
                                    hover:bg-green-50 dark:bg-slate-800
                                "
                            >

                                <FaLinkedin size={18} />

                                LinkedIn

                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

}