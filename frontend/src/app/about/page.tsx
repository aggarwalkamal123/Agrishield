import AboutHero from "@/components/about/Hero";
import MissionVision from "@/components/about/MissionVision";
import ProjectLead from "@/components/about/ProjectLead";
import TeamGrid from "@/components/about/TeamGrid";
import Acknowledgement from "@/components/about/Acknowledgement";
import ProjectStats from "@/components/about/ProjectStats";

export default function AboutPage() {

    return (

        <main className="bg-[#F8FAFC] dark:bg-slate-950">

            <AboutHero />

            <MissionVision />

            <ProjectLead />

            <TeamGrid />

            <Acknowledgement />

            <ProjectStats />

        </main>

    );

}