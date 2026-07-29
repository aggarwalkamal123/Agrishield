import { ShieldCheck, FileSpreadsheet, FlaskConical } from "lucide-react";

export default function AssessmentIntro() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">

            <div className="mx-auto max-w-7xl px-6 py-1">

                {/* Heading */}

                <div className="max-w-4xl">

                    <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
                        Soil Risk Assessment
                    </span>

                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white dark:text-white md:text-5xl">
                        Heavy Metal Risk Assessment
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                        Enter your soil properties and heavy metal concentrations to
                        generate a comprehensive AI-powered assessment report.
                        AgriShield evaluates soil pollution, food safety,
                        human health risks, ecological risks, and economic impact,
                        then provides personalized recommendations for safer
                        agricultural practices.
                    </p>

                </div>

            </div>

        </section>
    );
}