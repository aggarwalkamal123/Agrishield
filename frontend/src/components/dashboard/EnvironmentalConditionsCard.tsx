"use client";

import { Thermometer, Droplets } from "lucide-react";

interface Props {
    temperature?: string | number;
    moisture?: string | number;
}

export default function EnvironmentalConditionsCard({
    temperature,
    moisture,
}: Props) {

    const hasTemperature =
        temperature !== undefined &&
        temperature !== null &&
        temperature !== "";

    const hasMoisture =
        moisture !== undefined &&
        moisture !== null &&
        moisture !== "";

    return (
        <section
            className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-md
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-black/30
            "
        >

            {/* Header */}

            <div className="mb-8">

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-green-700
                        dark:text-green-400
                    "
                >
                    Environmental Conditions
                </h2>

                <p
                    className="
                        mt-2
                        text-sm
                        leading-6
                        text-gray-600
                        dark:text-gray-400
                    "
                >
                    Environmental conditions recorded during soil sample
                    collection.
                </p>

            </div>

            {/* Values */}

            <div className="grid gap-6 md:grid-cols-2">

                {/* Temperature */}

                <div
                    className="
                        flex
                        items-center
                        gap-5
                        rounded-2xl
                        border
                        border-orange-100
                        bg-orange-50
                        p-6
                        dark:border-orange-900/40
                        dark:bg-orange-950/20
                    "
                >

                    <div
                        className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-orange-100
                            dark:bg-orange-900/40
                        "
                    >

                        <Thermometer
                            className="
                                h-7
                                w-7
                                text-orange-600
                                dark:text-orange-400
                            "
                        />

                    </div>

                    <div>

                        <p
                            className="
                                text-sm
                                font-semibold
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Temperature
                        </p>

                        <p
                            className="
                                mt-1
                                text-3xl
                                font-black
                                text-slate-900
                                dark:text-white
                            "
                        >
                            {hasTemperature
                                ? `${temperature} °C`
                                : "Not provided"}
                        </p>

                    </div>

                </div>

                {/* Moisture */}

                <div
                    className="
                        flex
                        items-center
                        gap-5
                        rounded-2xl
                        border
                        border-blue-100
                        bg-blue-50
                        p-6
                        dark:border-blue-900/40
                        dark:bg-blue-950/20
                    "
                >

                    <div
                        className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-100
                            dark:bg-blue-900/40
                        "
                    >

                        <Droplets
                            className="
                                h-7
                                w-7
                                text-blue-600
                                dark:text-blue-400
                            "
                        />

                    </div>

                    <div>

                        <p
                            className="
                                text-sm
                                font-semibold
                                text-gray-500
                                dark:text-gray-400
                            "
                        >
                            Soil Moisture
                        </p>

                        <p
                            className="
                                mt-1
                                text-3xl
                                font-black
                                text-slate-900
                                dark:text-white
                            "
                        >
                            {hasMoisture
                                ? `${moisture} %`
                                : "Not provided"}
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}