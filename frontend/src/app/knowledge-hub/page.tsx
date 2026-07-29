"use client";

import Hero from "@/components/knowledgeHub/Hero";
import KnowledgeHubContent from "@/components/knowledgeHub/KnowledgeHubContent";
import FAQ from "@/components/knowledgeHub/FAQ";

export default function KnowledgeHubPage() {

    return (

        <main className="min-h-screen bg-[#f7fbf8] dark:bg-slate-950">

            <div className="mx-auto max-w-7xl space-y-16 px-6 py-14">

                {/* Hero */}

                <Hero />

                {/* Search + Articles + Modal */}

                <KnowledgeHubContent />

                {/* FAQ */}

                <FAQ />

            </div>

        </main>

    );

}