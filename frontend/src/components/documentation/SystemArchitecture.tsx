export default function SystemArchitecture() {

    return (

        <section
            id="architecture"
            className="space-y-8 scroll-mt-28"
        >

            <h2 className="text-4xl font-black text-slate-900 dark:text-white">

                System Architecture

            </h2>

            <p className="text-lg leading-9 text-gray-700 dark:text-gray-300">

                AgriShield follows a modern three-tier architecture consisting
                of the Presentation Layer (Frontend), Business Logic Layer
                (Backend), and Data Layer. The frontend communicates with the
                FastAPI backend through REST APIs. The backend performs
                pollution analysis, bioavailability estimation, risk
                assessment, AI recommendation generation, and report creation
                before returning processed results to the frontend.

            </p>

            <div className="overflow-hidden rounded-3xl border bg-white dark:bg-slate-900 p-8">

                <img

                    src="/architecture.png"

                    alt="Architecture"

                    className="w-full rounded-xl"

                />

            </div>

        </section>

    );

}