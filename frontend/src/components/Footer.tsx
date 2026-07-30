import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-green-900 via-emerald-900 to-green-950 text-white">

            <div className="mx-auto max-w-7xl px-3 py-3">

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}

                    <div>

                        <h2 className="flex items-center gap-2 text-3xl font-extrabold">

                            <span>🌱</span>

                            <span>AgriShield</span>

                        </h2>

                        <p className="mt-4 text-sm leading-7 text-green-100">

                            AI-powered Heavy Metal Risk Assessment &
                            Decision Support Platform for safer agriculture.
                            Helping farmers and researchers make
                            data-driven decisions.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-bold">

                            Quick Links

                        </h3>

                        <div className="mt-4 flex flex-col gap-2 text-green-100">

                            <Link href="/">Home</Link>

                            <Link href="/assessment">Assessment</Link>

                            <Link href="/knowledge-hub">Knowledge Hub</Link>

                            <Link href="/documentation">Documentation</Link>

                            <Link href="/about">About Us</Link>

                        </div>

                    </div>

                    {/* Features */}

                    <div>

                        <h3 className="text-xl font-bold">

                            Features

                        </h3>

                        <div className="mt-4 flex flex-col gap-2 text-green-100">

                            <p>AI-Based Soil Assessment</p>

                            <p>Heavy Metal Risk Analysis</p>

                            <p>Crop Safety Evaluation</p>

                            <p>Interactive Dashboard</p>

                            <p>Downloadable PDF Reports</p>

                        </div>

                    </div>

                    {/* Resources */}

                    <div>

                        <h3 className="text-xl font-bold">

                            Resources

                        </h3>

                        <div className="mt-4 flex flex-col gap-2 text-green-100">

                            <Link href="/documentation">
                                User Guide
                            </Link>

                            <Link href="/documentation">
                                API Documentation
                            </Link>

                            <Link href="/knowledge-hub">
                                FAQs
                            </Link>

                            <Link href="#">
                                Privacy Policy
                            </Link>

                            <Link href="#">
                                Terms of Use
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Divider */}

                <div className="mt-8 border-t border-white/20 pt-5">

                    <div className="text-center text-sm text-green-200">

                        Developed at <strong>AICTE IDEA Lab</strong> •
                        University School of Information and Communication Technology (USICT) •
                        Guru Gobind Singh Indraprastha University (GGSIPU) •
                        Delhi, India

                    </div>

                    <div className="mt-3 text-center text-sm text-green-300">

                        © 2026 AgriShield • All Rights Reserved

                    </div>

                </div>

            </div>

        </footer>
    );
}