export default function Introduction() {
    return (

        <section
            id="introduction"
            className="space-y-6 scroll-mt-28"
        >

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">
                Introduction
            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">

                AgriShield is an AI-powered soil contamination assessment
                platform developed to assist farmers, researchers, and
                environmental professionals in evaluating agricultural land
                affected by heavy metal pollution. The system combines
                environmental science, pollution indices, health risk
                assessment, food safety analysis, and Artificial Intelligence
                to provide accurate and easy-to-understand soil quality
                reports.

            </p>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">

                Users can manually enter soil parameters or upload laboratory
                data in CSV format. AgriShield performs automatic pollution
                calculations, evaluates ecological and human health risks,
                estimates heavy metal bioavailability, and finally generates
                AI-assisted recommendations for sustainable agricultural
                practices.

            </p>

        </section>

    );
}