"use client";

interface EnvironmentalInputsProps {

    temperature: string;
    setTemperature: (value: string) => void;

    moisture: string;
    setMoisture: (value: string) => void;

    error: Record<string, string>;

}

export default function EnvironmentalInputs({

    temperature,
    setTemperature,

    moisture,
    setMoisture,

    error,

}: EnvironmentalInputsProps) {

    return (

        <section className="space-y-8">

            {/* Heading */}

            <div>

                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">

                    Environmental Conditions

                </h3>

            </div>

            {/* Input Fields */}

            <div className="grid gap-8 md:grid-cols-2">

                {/* Temperature */}

                <div data-field="temperature">

                    <label className="mb-2 block font-semibold">

                        Temperature (°C)
                        <span className="ml-1 text-red-500">*</span>

                    </label>

                    <input

                        type="number"

                        step="0.1"

                        value={temperature}

                        onChange={(e) =>
                            setTemperature(e.target.value)
                        }

                        placeholder="Example: 28.5"

                        className={`
                            w-full
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            transition

                            ${error.temperature
                                ? "border-2 border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border border-gray-300 dark:border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900"
                            }

                            bg-white
                            dark:bg-slate-800
                        `}

                    />

                    <p className="mt-2 text-sm text-gray-500">

                        Ambient temperature during sample collection.

                    </p>

                    {error.temperature && (

                        <p className="mt-1 text-sm font-medium text-red-500">

                            {error.temperature}

                        </p>

                    )}

                </div>

                {/* Moisture */}

                <div data-field="moisture">

                    <label className="mb-2 block font-semibold">

                        Moisture (%)
                        <span className="ml-1 text-red-500">*</span>

                    </label>

                    <input

                        type="number"

                        step="0.1"

                        min="0"

                        max="100"

                        value={moisture}

                        onChange={(e) =>
                            setMoisture(e.target.value)
                        }

                        placeholder="Example: 18.2"

                        className={`
                            w-full
                            rounded-xl
                            px-4
                            py-3
                            outline-none
                            transition

                            ${error.moisture
                                ? "border-2 border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                                : "border border-gray-300 dark:border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900"
                            }

                            bg-white
                            dark:bg-slate-800
                        `}

                    />

                    <p className="mt-2 text-sm text-gray-500">

                        Approximate soil moisture at the time of sampling.

                    </p>

                    {error.moisture && (

                        <p className="mt-1 text-sm font-medium text-red-500">

                            {error.moisture}

                        </p>

                    )}

                </div>

            </div>

        </section>

    );

}