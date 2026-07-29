"use client";

interface Props {
    data: {
        soil_ph: number;
        ph_category: string;
        organic_matter: number;
        soil_texture: string;
    };
}

export default function SoilPropertiesCard({ data }: Props) {

    const items = [
        {
            title: "Soil pH",
            value: data.soil_ph,
        },
        {
            title: "pH Category",
            value: data.ph_category,
        },
        {
            title: "Organic Matter",
            value: `${data.organic_matter}%`,
        },
        {
            title: "Soil Texture",
            value: data.soil_texture,
        },
    ];

    return (

        <section className="rounded-3xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-white dark:bg-slate-900 dark:bg-slate-900 shadow-sm p-8">

            <div className="mb-8">

                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400">

                    Soil Properties

                </h2>

                <p className="mt-2 text-gray-500">

                    Summary of the submitted soil characteristics used during the assessment.

                </p>

            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                {items.map((item) => (

                    <div
                        key={item.title}
                        className="rounded-2xl border border-gray-200 dark:border-slate-700 dark:border-slate-700 bg-green-50 dark:bg-slate-800 dark:bg-slate-800 p-6"
                    >

                        <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">

                            {item.title}

                        </p>

                        <p className="mt-4 text-3xl font-bold text-green-700 dark:text-green-400">

                            {item.value}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}