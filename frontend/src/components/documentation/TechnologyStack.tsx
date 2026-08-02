const tech = [

    ["Frontend", "Next.js 16, React, Tailwind CSS, TypeScript"],

    ["Backend", "FastAPI (Python)"],

    ["AI Model", "Google Gemini API"],

    ["Database", "SQLite"],

    ["Visualization", "Recharts"],

    ["PDF Reports", "ReportLab"],

    ["Deployment", "Vercel & Render"],

];

export default function TechnologyStack() {

    return (

        <section
            id="technology"
            className="space-y-6 scroll-mt-28"
        >

            <h2
                className="
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl
                    font-black
                    text-slate-900
                    dark:text-white
                "
            >

                Technology Stack

            </h2>

            <div
                className="
                    overflow-x-auto
                    rounded-3xl
                    border
                    border-gray-200
                    dark:border-slate-700
                "
            >

                <table className="min-w-[650px] w-full">

                    <thead className="bg-green-700 text-white">

                        <tr>

                            <th className="px-4 sm:px-6 py-4 text-left whitespace-nowrap">

                                Component

                            </th>

                            <th className="px-4 sm:px-6 py-4 text-left whitespace-nowrap">

                                Technology

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {tech.map(([name, value]) => (

                            <tr
                                key={name}
                                className="border-t border-gray-200 dark:border-slate-700"
                            >

                                <td className="px-4 sm:px-6 py-4 font-semibold whitespace-nowrap">

                                    {name}

                                </td>

                                <td className="px-4 sm:px-6 py-4">

                                    {value}

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>

    );

}