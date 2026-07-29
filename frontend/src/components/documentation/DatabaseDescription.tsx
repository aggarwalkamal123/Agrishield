export default function DatabaseDescription() {

    const tables = [

        {
            name: "heavy_metals",
            purpose: "Stores the basic properties of each heavy metal, including atomic information, oral reference dose (RfD), toxicity score, carcinogenicity, and description."
        },

        {
            name: "background_concentrations",
            purpose: "Contains natural background concentrations of heavy metals used for calculating Contamination Factor (CF), Geoaccumulation Index (Igeo), and Enrichment Factor (EF)."
        },

        {
            name: "who_limits",
            purpose: "Stores WHO permissible concentration limits of heavy metals used for contamination assessment and food safety evaluation."
        },

        {
            name: "exposure_parameters",
            purpose: "Stores daily food intake and average body weight values for different consumer groups used during health risk assessment."
        },

        {
            name: "crop_baf",
            purpose: "Contains crop-specific Bioaccumulation Factors (BAF) that estimate the transfer of heavy metals from soil to edible crop tissues."
        },

        {
            name: "index_classification",
            purpose: "Stores threshold ranges and interpretation labels for pollution indices such as CF, Igeo, EF, PLI, NPI, PERI, HQ, HI, and Food Safety Index."
        },

        {
            name: "toxic_response_factors",
            purpose: "Contains Hakanson Toxic Response Factors (Tr) for each heavy metal, which are required for calculating the Ecological Risk Factor (ER) and Potential Ecological Risk Index (PERI)."
        },

        {
            name: "food_safety_classification",
            purpose: "Stores Food Safety Index (FSI) ranges, safety labels, and corresponding interpretations for classifying agricultural produce."
        },

    ];

    return (

        <section
            id="database"
            className="space-y-8 scroll-mt-28"
        >

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">
                Database Description
            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">

                AgriShield uses a lightweight SQLite database to store all
                scientific reference values required during contamination
                assessment. Rather than storing user records, the database acts
                as a knowledge repository containing internationally accepted
                threshold values, background concentrations, crop-specific
                parameters and pollution classification rules.

            </p>

            <div className="overflow-hidden rounded-3xl border">

                <table className="w-full">

                    <thead className="bg-green-700 text-white">

                        <tr>

                            <th className="px-6 py-4 text-left">
                                Table
                            </th>

                            <th className="px-6 py-4 text-left">
                                Description
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {tables.map((table) => (

                            <tr
                                key={table.name}
                                className="border-t"
                            >

                                <td className="px-6 py-5 font-semibold">
                                    {table.name}
                                </td>

                                <td className="px-6 py-5 text-gray-700 dark:text-gray-300">
                                    {table.purpose}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </section>

    );

}