"use client";

interface IndexResult {
    index: string;
    value: number;
    label: string;
    description?: string;
}

interface Props {
    data: IndexResult[];
}

export default function IndexTable({ data }: Props) {

    function getBadge(label: string) {

        const text = label.toLowerCase();

        if (text.includes("very high") || text.includes("critical")) {
            return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
        }

        if (text.includes("high")) {
            return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
        }

        if (text.includes("moderate")) {
            return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
        }

        if (text.includes("low") || text.includes("safe")) {
            return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
        }

        return "bg-gray-100 text-gray-700 dark:text-gray-300 dark:bg-slate-700 dark:text-gray-200";
    }

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">

                    Pollution Indices

                </h2>

                <p className="mt-2 text-gray-500">

                    Summary of contamination and ecological risk indices calculated from the submitted heavy metal concentrations.

                </p>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                    <thead>

                        <tr className="border-b border-gray-300 dark:border-slate-700">

                            <th className="px-4 py-4 text-left">
                                Index
                            </th>

                            <th className="px-4 py-4 text-center">
                                Value
                            </th>

                            <th className="px-4 py-4 text-center">
                                Category
                            </th>

                            <th className="px-4 py-4 text-left">
                                Interpretation
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.map((item) => (

                            <tr
                                key={item.index}
                                className="border-b border-gray-200 dark:border-slate-700 dark:border-slate-800 hover:bg-gray-50 dark:bg-slate-800 dark:hover:bg-slate-800 transition"
                            >

                                <td className="px-4 py-5 font-semibold">

                                    {item.index}

                                </td>

                                <td className="px-4 py-5 text-center font-medium">

                                    {item.value.toFixed(2)}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    <span className={`rounded-full px-4 py-1 font-semibold ${getBadge(item.label)}`}>

                                        {item.label}

                                    </span>

                                </td>

                                <td className="px-4 py-5 leading-7 text-gray-600 dark:text-gray-400 dark:text-gray-300">

                                    {item.description || "-"}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>

    );

}