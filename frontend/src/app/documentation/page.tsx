"use client";

import DocumentationHero from "@/components/documentation/DocumentationHero";
import Sidebar from "@/components/documentation/Sidebar";

import Introduction from "@/components/documentation/Introduction";
import TechnologyStack from "@/components/documentation/TechnologyStack";
import SystemArchitecture from "@/components/documentation/SystemArchitecture";
import Workflow from "@/components/documentation/WorkflowSection";
import DatabaseSection from "@/components/documentation/DatabaseDescription";
import ApiDocumentation from "@/components/documentation/ApiDocumentation";
import ResearchPapers from "@/components/documentation/ResearchPapers";
import UserManual from "@/components/documentation/UserManual";
import ProjectStructure from "@/components/documentation/ProjectStructure";

export default function DocumentationPage() {

    return (

        <main className="bg-gray-50 dark:bg-slate-950 min-h-screen">

            <DocumentationHero />

            <div
                className="
                    mx-auto
                    grid
                    max-w-7xl
                    grid-cols-1
                    gap-12
                    px-6
                    py-14
                    lg:grid-cols-[280px_1fr]
                "
            >

                <Sidebar />

                <div className="space-y-20">

                    <Introduction />

                    <TechnologyStack />

                    <SystemArchitecture />

                    <Workflow />

                    <DatabaseSection />

                    <ApiDocumentation />

                    <ResearchPapers />

                    <UserManual />

                    <ProjectStructure />

                </div>

            </div>

        </main>

    );

}