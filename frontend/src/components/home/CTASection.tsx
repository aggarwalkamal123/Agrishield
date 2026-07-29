import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTASection() {
    return (
        <section className="bg-white dark:bg-slate-950 py-24">
            <div className="mx-auto max-w-6xl px-6">

                <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-green-700 via-emerald-700 to-green-900 px-10 py-20 text-center text-white shadow-2xl">

                    <div className="mx-auto max-w-3xl">

                        <div className="mb-8 flex justify-center">

                            <div className="rounded-full bg-white/15 p-5 backdrop-blur">

                                <ShieldCheck className="h-12 w-12" />

                            </div>

                        </div>

                        <h2 className="text-4xl font-extrabold md:text-5xl">

                            Ready to Analyze Your Soil?

                        </h2>

                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-green-100">

                            Upload your heavy metal concentration data and receive a
                            comprehensive AI-powered assessment including pollution
                            indices, ecological risk analysis, health hazard evaluation,
                            food safety status, interactive visualizations and actionable
                            recommendations — all within seconds.

                        </p>

                        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

                            <Link
                                href="/assessment"
                                className="inline-flex items-center gap-3 rounded-2xl bg-white text-green-700 px-8 py-4 text-lg font-bold text-green-700 shadow-lg dark:shadow-black/40 transition duration-300 hover:scale-105 hover:bg-green-50 dark:bg-slate-800"
                            >
                                Start Assessment

                                <ArrowRight className="h-5 w-5" />

                            </Link>

                            <Link
                                href="/documentation"
                                className="rounded-2xl border border-white/40 px-8 py-4 text-lg font-semibold transition duration-300 hover:bg-white/10"
                            >
                                View Documentation
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}