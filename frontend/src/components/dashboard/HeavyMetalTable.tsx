"use client";

interface Metal {
    metal: string;
    soil_concentration: number;
    who_limit: number;
    status: string;
    cf?: number;
    igeo?: number;
    ef?: number;
    er?: number;
    adult_hq?: number;
    child_hq?: number;
}

interface Props {
    data: Metal[];
}

export default function HeavyMetalTable({ data }: Props) {

    function badge(status: string) {

        const s = status.toLowerCase();

        if (s.includes("safe")) {

            return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

        }

        if (s.includes("warning")) {

            return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

        }

        if (s.includes("unsafe")) {

            return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";

        }

        return "bg-gray-100 text-gray-700 dark:text-gray-300 dark:bg-slate-700 dark:text-gray-200";

    }

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">

                    Heavy Metal Analysis

                </h2>

                <p className="mt-2 text-gray-500">

                    Comparison of measured heavy metal concentrations with WHO permissible limits along with calculated contamination indices.

                </p>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full border-collapse">

                    <thead>

                        <tr className="border-b border-gray-300 dark:border-slate-700">

                            <th className="px-4 py-4 text-left">Metal</th>

                            <th className="px-4 py-4 text-center">Observed (mg/kg)</th>

                            <th className="px-4 py-4 text-center">WHO Limit</th>

                            <th className="px-4 py-4 text-center">Status</th>

                            <th className="px-4 py-4 text-center">CF</th>

                            <th className="px-4 py-4 text-center">Igeo</th>

                            <th className="px-4 py-4 text-center">EF</th>

                            <th className="px-4 py-4 text-center">ER</th>

                            <th className="px-4 py-4 text-center">Adult HQ</th>

                            <th className="px-4 py-4 text-center">Child HQ</th>

                        </tr>

                    </thead>

                    <tbody>

                        {data.map((metal) => (

                            <tr
                                key={metal.metal}
                                className="border-b border-gray-200 dark:border-slate-700 dark:border-slate-800 hover:bg-gray-50 dark:bg-slate-800 dark:hover:bg-slate-800 transition"
                            >

                                <td className="px-4 py-5 font-semibold">

                                    {metal.metal}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    {metal.soil_concentration.toFixed(3)}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    {metal.who_limit.toFixed(3)}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    <span className={`rounded-full px-4 py-1 font-semibold ${badge(metal.status)}`}>

                                        {metal.status}

                                    </span>

                                </td>

                                <td className="px-4 py-5 text-center">

                                    {metal.cf?.toFixed(2)}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    {metal.igeo?.toFixed(2)}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    {metal.ef?.toFixed(2)}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    {metal.er?.toFixed(2)}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    {metal.adult_hq?.toFixed(2)}

                                </td>

                                <td className="px-4 py-5 text-center">

                                    {metal.child_hq?.toFixed(2)}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>

    );

}