"use client";

interface CropSelectionProps {
    value?: string;
    onChange?: (value: string) => void;
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
}: CropSelectionProps) {
    return (
        <section className="rounded-2xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 p-8 shadow-sm">

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-green-700 dark:text-white">
                    Crop Selection
                </h2>

                <p className="mt-2 text-gray-600 dark:text-gray-400 dark:text-gray-400">
                    Select the crop for which contamination assessment and risk analysis
                    will be performed.
                </p>
            </div>

            <select
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                className="w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 dark:bg-slate-800 px-4 py-3 text-lg outline-none focus:border-green-600"
            >
                <option value="">Select Crop</option>

                {crops.map((crop) => (
                    <option key={crop} value={crop}>
                        {crop}
                    </option>
                ))}
            </select>

        </section>
    );
}