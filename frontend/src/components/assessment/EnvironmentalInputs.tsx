"use client";

interface EnvironmentalInputsProps {
    temperature: string;
    setTemperature: (value: string) => void;

    moisture: string;
    setMoisture: (value: string) => void;
}

export default function EnvironmentalInputs({
    temperature,
    setTemperature,
    moisture,
    setMoisture,
}: EnvironmentalInputsProps) {

    return (

        <section className="space-y-8">

            {/* Heading */}

            <div>

                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">
                    Environmental Conditions
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 dark:text-gray-400">
                    These values are collected only for display in the final dashboard.
                    They are <strong>not used</strong> in the heavy metal assessment calculations.
                </p>

            </div>

            {/* Input Fields */}

            <div className="grid gap-8 md:grid-cols-2">

                {/* Temperature */}

                <div>

                    <label className="mb-2 block font-semibold">
                        Temperature (°C)
                    </label>

                    <input
                        type="number"
                        step="0.1"
                        value={temperature}
                        onChange={(e) => setTemperature(e.target.value)}
                        placeholder="Example: 28.5"
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            dark:border-slate-600
                            bg-white dark:bg-slate-900
                            dark:bg-slate-800
                            px-4
                            py-3
                            outline-none
                            transition
                            focus:border-green-500
                            focus:ring-2
                            focus:ring-green-200
                            dark:focus:ring-green-900
                        "
                    />

                    <p className="mt-2 text-sm text-gray-500">
                        Ambient temperature during sample collection.
                    </p>

                </div>

                {/* Moisture */}

                <div>

                    <label className="mb-2 block font-semibold">
                        Moisture (%)
                    </label>

                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="100"
                        value={moisture}
                        onChange={(e) => setMoisture(e.target.value)}
                        placeholder="Example: 18.2"
                        className="
                            w-full
                            rounded-xl
                            border
                            border-gray-300
                            dark:border-slate-600
                            bg-white dark:bg-slate-900
                            dark:bg-slate-800
                            px-4
                            py-3
                            outline-none
                            transition
                            focus:border-green-500
                            focus:ring-2
                            focus:ring-green-200
                            dark:focus:ring-green-900
                        "
                    />

                    <p className="mt-2 text-sm text-gray-500">
                        Approximate soil moisture at the time of sampling.
                    </p>

                </div>

            </div>

        </section>

    );

}