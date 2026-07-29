"use client";

import Image from "next/image";

export default function Acknowledgement() {

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
                        🙏 Acknowledgement
                    </div>

                    <h2
                        className="
                            mt-8
                            text-6xl
                            font-black
                            text-green-700
                        "
                    >
                        Our Mentors & AICTE Idea Lab
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
                        AgriShield was developed under the guidance of our
                        respected mentors at AICTE IDEA Lab, USICT, whose
                        continuous support, technical expertise, and valuable
                        suggestions played a significant role throughout the
                        project.
                    </p>

                </div>

                {/* AICTE Card */}

                <div
                    className="
                        mt-16
                        rounded-[36px]
                        bg-white dark:bg-slate-900
                        p-12
                        shadow-xl
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            gap-10
                            lg:flex-row
                        "
                    >

                        <Image
                            src="/logos/IDEA_lab.png"
                            alt="AICTE IDEA Lab"
                            width={180}
                            height={180}
                            className="object-contain"
                        />

                        <div>

                            <h3
                                className="
                                    text-4xl
                                    font-black
                                    text-green-700
                                "
                            >
                                AICTE IDEA Lab
                            </h3>

                            <p
                                className="
                                    mt-6
                                    text-lg
                                    leading-9
                                    text-gray-700 dark:text-gray-300
                                "
                            >
                                AICTE IDEA Lab at University School of
                                Information and Communication Technology
                                (USICT), GGSIPU provides students with an
                                innovation-driven ecosystem to transform
                                research ideas into practical solutions through
                                interdisciplinary collaboration, advanced
                                technologies, and project-based learning.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Mentors */}

                <div className="mt-16 grid gap-8 md:grid-cols-2">

                    {/* Mentor */}

                    <div
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

                        <Image
                            src="/mentors/yashima.jpeg"
                            alt="Dr. Yashima Hooda"
                            width={120}
                            height={120}
                            className="mx-auto rounded-full"
                        />

                        <h3
                            className="
                mt-8
                text-3xl
                font-black
            "
                        >
                            Dr. Yashima Hooda
                        </h3>

                        <p className="mt-3 font-semibold text-green-700">

                            Faculty Mentor

                        </p>

                        <p className="mt-2 text-gray-600 dark:text-gray-400">

                            Assistant Professor, USICT, GGSIPU

                        </p>

                    </div>

                    {/* Chief Mentor */}

                    <div
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

                        <Image
                            src="/mentors/amit-prakash-singh.jpeg"
                            alt="Dr. Amit Prakash Singh"
                            width={120}
                            height={120}
                            className="mx-auto rounded-full"
                        />

                        <h3
                            className="
                mt-8
                text-3xl
                font-black
            "
                        >
                            Dr. Amit Prakash Singh
                        </h3>

                        <p className="mt-3 font-semibold text-green-700">

                            Chief Mentor

                        </p>

                        <p className="mt-2 text-gray-600 dark:text-gray-400">

                            AICTE IDEA Lab, GGSIPU

                        </p>

                    </div>

                </div>

                {/* Thank You */}

                <div
                    className="
                        mt-16
                        rounded-[36px]
                        bg-gradient-to-r
                        from-green-600
                        to-green-700
                        p-14
                        text-center
                        text-white
                    "
                >

                    <h3 className="text-5xl font-black">

                        Thank You!

                    </h3>

                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-5xl
                            text-xl
                            leading-10
                        "
                    >
                        We sincerely express our gratitude to our mentors,
                        AICTE IDEA Lab, and USICT, GGSIPU for providing the
                        guidance, infrastructure, encouragement, and technical
                        resources required for the successful development of
                        AgriShield.
                    </p>

                </div>

            </div>

        </section >

    );

}