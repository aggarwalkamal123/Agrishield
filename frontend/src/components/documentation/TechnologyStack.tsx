const tech = [

    ["Frontend", "Next.js 16, React, Tailwind CSS, TypeScript"],

    ["Backend", "FastAPI (Python)"],

    ["AI Model", "Google Gemini API"],

    ["Database", "SQLite"],

    ["Visualization", "Recharts"],

    ["PDF Reports", "ReportLab"],

    ["Deployment", "Vercel and Render"],

];

export default function TechnologyStack() {

    return (

        <section
            id="technology"
            className="space-y-8 scroll-mt-28"
        >

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">

                Technology Stack

            </h2>

            <div className="overflow-hidden rounded-3xl border">

                <table className="w-full">

                    <thead className="bg-green-700 text-white">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                Component
                            </th>

                            <th className="px-6 py-4 text-left">
                                Technology
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {tech.map(([name, value]) => (

                            <tr
                                key={name}
                                className="border-t"
                            >

                                <td className="px-6 py-5 font-semibold">

                                    {name}

                                </td>

                                <td className="px-6 py-5">

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