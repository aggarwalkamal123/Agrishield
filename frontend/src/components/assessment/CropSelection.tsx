"use client";

interface CropSelectionProps {
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
}

const crops = [
    "Spinach",
    "Lettuce",
    "Cabbage",
    "Cauliflower",
    "Wheat",
    "Rice",
    "Corn",
    "Maize",
    "Potato",
    "Tomato",
    "Onion",
    "Carrot",
    "Radish",
    "Sweet Potato",
    "Cucumber",
    "Green Beans",
    "Pumpkin",
    "Brinjal",
];

export default function CropSelection({

    value,
    onChange,
    error,

}: CropSelectionProps) {

    return (

        <section
            data-field="crop"
            className="
                rounded-2xl
                border
                border-gray-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-900
                p-8
                shadow-sm
            "
        >

            {/* Heading */}

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-green-700 dark:text-white">

                    Crop Selection
                    <span className="ml-1 text-red-500">*</span>

                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-400">

                    Select the crop for which contamination assessment and risk
                    analysis will be performed.

                </p>

            </div>

            {/* Select */}

            <select

                value={value}

                onChange={(e) => onChange?.(e.target.value)}

                className={`

                    w-full
                    rounded-xl
                    px-4
                    py-3
                    text-lg
                    outline-none
                    transition

                    ${error
                        ? "border-2 border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                        : "border border-gray-300 dark:border-slate-600 focus:border-green-600 focus:ring-2 focus:ring-green-200"
                    }

                    bg-white
                    dark:bg-slate-800

                `}
            >

                <option value="">

                    Select Crop

                </option>

                {crops.map((crop) => (

                    <option
                        key={crop}
                        value={crop}
                    >

                        {crop}

                    </option>

                ))}

            </select>

            {/* Error */}

            {error && (

                <p className="mt-2 text-sm font-medium text-red-500">

                    {error}

                </p>

            )}

        </section>

    );

}