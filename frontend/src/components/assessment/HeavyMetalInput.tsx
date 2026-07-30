"use client";

import { Upload, Plus, Trash2 } from "lucide-react";

interface ManualEntry {
    metal: string;
    concentration: string;
}

interface HeavyMetalInputProps {
    csvFile: File | null;
    setCsvFile: (file: File | null) => void;

    manualEntries: ManualEntry[];
    setManualEntries: (entries: ManualEntry[]) => void;

    loading: boolean;
    handleSubmit: () => void;
}

const metals = [
    "As",
    "Cd",
    "Cr",
    "Cu",
    "Hg",
    "Ni",
    "Pb",
    "Zn",
    "Fe",
    "Mn",
    "Co"
];

export default function HeavyMetalInput({

    csvFile,
    setCsvFile,

    manualEntries,
    setManualEntries,

    loading,
    handleSubmit,

}: HeavyMetalInputProps) {

    const addRow = () => {

        setManualEntries([
            ...manualEntries,
            {
                metal: "",
                concentration: "",
            },
        ]);

    };

    const removeRow = (index: number) => {

        const updated = [...manualEntries];

        updated.splice(index, 1);

        setManualEntries(updated);

    };

    const updateMetal = (index: number, value: string) => {

        const updated = [...manualEntries];

        updated[index].metal = value;

        setManualEntries(updated);

    };

    const updateConcentration = (
        index: number,
        value: string
    ) => {

        const updated = [...manualEntries];

        updated[index].concentration = value;

        setManualEntries(updated);

    };

    return (

        <section className="space-y-10">

            {/* Heading */}

            <div>

                <h3 className="text-2xl font-bold text-green-700 dark:text-green-400">
                    Heavy Metal Concentrations
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 dark:text-gray-400">

                    Upload a CSV file or manually enter heavy metal
                    concentrations measured in the soil sample.

                </p>

            </div>

            {/* CSV Upload */}

            <div className="rounded-3xl border-2 border-dashed border-green-400 bg-green-50 dark:bg-slate-800 dark:bg-slate-900 p-8">

                <div className="flex flex-col items-center text-center">

                    <Upload className="mb-4 h-14 w-14 text-green-600" />

                    <h4 className="text-xl font-bold">

                        Upload CSV File

                    </h4>

                    <p className="mt-2 text-gray-600 dark:text-gray-400 dark:text-gray-400">

                        Format: Heavy Metal | Concentration (mg/kg)

                    </p>

                    <input
                        type="file"
                        accept=".csv"
                        className="mt-6"
                        onChange={(e) => {

                            if (e.target.files?.length) {

                                setCsvFile(e.target.files[0]);

                            }

                        }}
                    />

                    {csvFile && (

                        <p className="mt-3 text-green-700 font-medium">

                            {csvFile.name}

                        </p>

                    )}

                </div>

            </div>

            {/* Divider */}

            <div className="flex items-center gap-5">

                <div className="h-px flex-1 bg-gray-300 dark:bg-slate-700" />

                <span className="font-semibold text-gray-500">

                    OR

                </span>

                <div className="h-px flex-1 bg-gray-300 dark:bg-slate-700" />

            </div>

            {/* Manual Entry */}

            <div className="rounded-3xl border bg-white dark:bg-slate-900 dark:bg-slate-900 p-8 shadow-sm">

                <div className="flex items-center justify-between">

                    <div>

                        <h4 className="text-xl font-bold">

                            Manual Entry

                        </h4>

                        <p className="mt-1 text-gray-500">

                            Add heavy metals individually.

                        </p>

                    </div>

                    <button
                        type="button"
                        onClick={addRow}
                        className="flex items-center gap-2 rounded-xl bg-green-700 px-5 py-3 font-semibold text-white hover:bg-green-800"
                    >

                        <Plus className="h-5 w-5" />

                        Add Metal

                    </button>

                </div>

                <div className="mt-8 space-y-5">

                    {manualEntries.map((row, index) => (

                        <div
                            key={index}
                            className="grid gap-4 md:grid-cols-[1fr_1fr_auto]"
                        >

                            <select

                                value={row.metal}

                                onChange={(e) =>
                                    updateMetal(index, e.target.value)
                                }

                                className="rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 dark:bg-slate-800 px-4 py-3"

                            >

                                <option value="">

                                    Select Heavy Metal

                                </option>

                                {metals.map((metal) => (

                                    <option
                                        key={metal}
                                        value={metal}
                                    >

                                        {metal}

                                    </option>

                                ))}

                            </select>

                            <input

                                type="number"

                                step="0.001"

                                value={row.concentration}

                                onChange={(e) =>
                                    updateConcentration(
                                        index,
                                        e.target.value
                                    )
                                }

                                placeholder="Concentration (mg/kg)"

                                className="rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 dark:bg-slate-800 px-4 py-3"

                            />

                            <button

                                type="button"

                                onClick={() => removeRow(index)}

                                className="rounded-xl bg-red-500 px-4 text-white hover:bg-red-600"

                            >

                                <Trash2 className="h-5 w-5" />

                            </button>

                        </div>

                    ))}

                    {manualEntries.length === 0 && (

                        <p className="text-gray-500">

                            No manual entries added.

                        </p>

                    )}

                </div>

            </div>

            {/* Submit */}

            <div className="flex justify-center">

                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full rounded-xl bg-green-700 px-6 py-4 text-lg font-semibold text-white transition hover:bg-green-800 disabled:opacity-60"
                >

                    {loading
                        ? "Running Assessment..."
                        : "Start Assessment"}

                </button>

            </div>

        </section>

    );

}