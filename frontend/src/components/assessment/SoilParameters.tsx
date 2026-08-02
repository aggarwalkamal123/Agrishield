"use client";

interface SoilParametersProps {
    soilPH: string;
    setSoilPH: (value: string) => void;

    organicMatter: string;
    setOrganicMatter: (value: string) => void;

    soilTexture: string;
    setSoilTexture: (value: string) => void;

    error: Record<string, string>;
}

export default function SoilParameters({
    soilPH,
    setSoilPH,
    organicMatter,
    setOrganicMatter,
    soilTexture,
    setSoilTexture,
    error,
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

                <div data-field="soilPH">

                    <label className="mb-2 block font-semibold">
                        Soil pH <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="14"
                        value={soilPH}
                        onChange={(e) => setSoilPH(e.target.value)}
                        placeholder="Example: 6.8"
                        className={`
                            w-full
                            rounded-xl
                            border
                            bg-white
                            dark:bg-slate-800
                            px-4
                            py-3
                            outline-none
                            transition
                            ${error.soilPH
                                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900"
                                : "border-gray-300 dark:border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900"
                            }
                        `}
                    />

                    {error.soilPH && (
                        <p className="mt-2 text-sm text-red-600">
                            {error.soilPH}
                        </p>
                    )}

                    {!error.soilPH && (
                        <p className="mt-2 text-sm text-gray-500">
                            Valid range: 0 – 14
                        </p>
                    )}

                </div>

                {/* Organic Matter */}

                <div data-field="organicMatter">

                    <label className="mb-2 block font-semibold">
                        Organic Matter (%){" "}
                        <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={organicMatter}
                        onChange={(e) => setOrganicMatter(e.target.value)}
                        placeholder="Example: 2.5"
                        className={`
                            w-full
                            rounded-xl
                            border
                            bg-white
                            dark:bg-slate-800
                            px-4
                            py-3
                            outline-none
                            transition
                            ${error.organicMatter
                                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900"
                                : "border-gray-300 dark:border-slate-600 focus:border-green-500 focus:ring-2 focus:ring-green-200 dark:focus:ring-green-900"
                            }
                        `}
                    />

                    {error.organicMatter && (
                        <p className="mt-2 text-sm text-red-600">
                            {error.organicMatter}
                        </p>
                    )}

                    {!error.organicMatter && (
                        <p className="mt-2 text-sm text-gray-500">
                            Percentage of soil organic matter by weight.
                        </p>
                    )}

                </div>

            </div>

            {/* Soil Texture */}

            <div data-field="soilTexture">

                <label className="mb-4 block font-semibold">
                    Soil Texture <span className="text-red-500">*</span>
                </label>

                <div
                    className={`
                        flex flex-wrap gap-6 rounded-xl border p-4 transition
                        ${error.soilTexture
                            ? "border-red-500"
                            : "border-transparent"
                        }
                    `}
                >

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

                {error.soilTexture && (
                    <p className="mt-2 text-sm text-red-600">
                        {error.soilTexture}
                    </p>
                )}

            </div>

        </section>

    );

}