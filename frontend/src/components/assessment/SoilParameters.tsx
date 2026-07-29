"use client";

interface SoilParametersProps {
    soilPH: string;
    setSoilPH: (value: string) => void;

    organicMatter: string;
    setOrganicMatter: (value: string) => void;

    soilTexture: string;
    setSoilTexture: (value: string) => void;
}

export default function SoilParameters({
    soilPH,
    setSoilPH,
    organicMatter,
    setOrganicMatter,
    soilTexture,
    setSoilTexture,
}: SoilParametersProps) {

    return (

        <section className="space-y-8">

            {/* Heading */}

            <div>

                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">
                    Soil Parameters
                </h3>

            </div>

            {/* Inputs */}

            <div className="grid gap-8 md:grid-cols-2">

                {/* Soil pH */}

                <div>

                    <label className="mb-2 block font-semibold">
                        Soil pH
                    </label>

                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="14"
                        value={soilPH}
                        onChange={(e) => setSoilPH(e.target.value)}
                        placeholder="Example: 6.8"
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
                        Valid range: 0 – 14
                    </p>

                </div>

                {/* Organic Matter */}

                <div>

                    <label className="mb-2 block font-semibold">
                        Organic Matter (%)
                    </label>

                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={organicMatter}
                        onChange={(e) => setOrganicMatter(e.target.value)}
                        placeholder="Example: 2.5"
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
                        Percentage of soil organic matter by weight.
                    </p>

                </div>

            </div>

            {/* Soil Texture */}

            <div>

                <label className="mb-4 block font-semibold">
                    Soil Texture
                </label>

                <div className="flex flex-wrap gap-6">

                    {["Sand", "Silt", "Clay"].map((texture) => (

                        <label
                            key={texture}
                            className="flex items-center gap-3 cursor-pointer"
                        >

                            <input
                                type="radio"
                                name="texture"
                                value={texture}
                                checked={soilTexture === texture}
                                onChange={(e) =>
                                    setSoilTexture(e.target.value)
                                }
                                className="h-5 w-5 accent-green-700"
                            />

                            <span>{texture}</span>

                        </label>

                    ))}

                </div>

            </div>

        </section>

    );

}