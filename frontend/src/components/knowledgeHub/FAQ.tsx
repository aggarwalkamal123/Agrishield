"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [

    {
        question: "What are heavy metals in soil?",
        answer:
            "Heavy metals are naturally occurring metallic elements such as lead (Pb), cadmium (Cd), arsenic (As), chromium (Cr), mercury (Hg), nickel (Ni), copper (Cu), zinc (Zn), iron (Fe), and manganese (Mn). At elevated concentrations, they can negatively affect soil quality, crop productivity, and human health.",
    },

    {
        question: "Why is heavy metal contamination harmful?",
        answer:
            "Excessive heavy metals reduce soil fertility, accumulate inside crops, contaminate groundwater, and may cause long-term health problems when contaminated food is consumed regularly.",
    },

    {
        question: "How does AgriShield assess soil contamination?",
        answer:
            "AgriShield evaluates heavy metal concentrations using internationally accepted pollution indices, bioavailability estimation, food safety analysis, health risk assessment, and AI-generated recommendations.",
    },

    {
        question: "Can contaminated soil be restored?",
        answer:
            "Yes. Depending on contamination severity, methods such as phytoremediation, soil amendments, immobilization techniques, crop rotation, and controlled irrigation can significantly reduce contamination risks.",
    },

    {
        question: "What recommendations does AgriShield provide?",
        answer:
            "AgriShield suggests suitable crops, remediation techniques, monitoring frequency, soil management practices, and preventive measures based on the contamination level of the soil.",
    },

    {
        question: "What is bioavailability of heavy metals?",
        answer:
            "Bioavailability refers to the fraction of heavy metals that can be absorbed by plant roots. It depends on factors such as soil pH, organic matter, moisture, and soil texture, and determines how easily metals move from soil into crops.",
    },

    {
        question: "Which pollution indices are used in AgriShield?",
        answer:
            "AgriShield calculates several internationally recognized indices, including Contamination Factor (CF), Geo-Accumulation Index (Igeo), Enrichment Factor (EF), Pollution Load Index (PLI), Nemerow Pollution Index (NPI), and Potential Ecological Risk Index (PERI) to comprehensively evaluate soil contamination.",
    },

    {
        question: "Can I analyze multiple soil samples at once?",
        answer:
            "Yes. AgriShield supports CSV file uploads, allowing users to analyze multiple soil samples in a single assessment. This feature is particularly useful for researchers, laboratories, and agricultural agencies handling large datasets.",
    },

    {
        question: "Is AgriShield suitable for farmers as well as researchers?",
        answer:
            "Yes. AgriShield is designed for farmers, researchers, environmental scientists, policymakers, and agricultural professionals by providing easy-to-understand visualizations, contamination assessment, and AI-powered recommendations.",
    },

    {
        question: "Does AgriShield replace laboratory testing?",
        answer:
            "No. AgriShield complements laboratory analysis by interpreting measured heavy metal concentrations, assessing contamination risks, and generating scientific recommendations. Accurate laboratory data are essential for reliable results.",
    },

];

export default function FAQ() {

    const [open, setOpen] = useState<number | null>(0);

    return (

        <section className="rounded-3xl bg-white dark:bg-slate-900 p-10 shadow-sm">

            <div className="mb-10">

                <h2 className="text-4xl font-black text-slate-900 dark:text-white">

                    Frequently Asked Questions

                </h2>

                <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">

                    Common questions related to soil contamination and AgriShield.

                </p>

            </div>

            <div className="space-y-5">

                {faqs.map((faq, index) => {

                    const expanded = open === index;

                    return (

                        <div

                            key={index}

                            className="overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-700"

                        >

                            <button

                                onClick={() =>
                                    setOpen(expanded ? null : index)
                                }

                                className="flex w-full items-center justify-between bg-white dark:bg-slate-900 px-8 py-6 text-left transition hover:bg-green-50 dark:bg-slate-800"

                            >

                                <span className="text-lg font-bold text-slate-900 dark:text-white">

                                    {faq.question}

                                </span>

                                <ChevronDown

                                    className={`transition duration-300 ${expanded ? "rotate-180" : ""
                                        }`}

                                />

                            </button>

                            {expanded && (

                                <div className="border-t bg-gray-50 dark:bg-slate-800 px-8 py-6">

                                    <p className="leading-8 text-gray-600 dark:text-gray-400">

                                        {faq.answer}

                                    </p>

                                </div>

                            )}

                        </div>

                    );

                })}

            </div>

        </section>

    );

}