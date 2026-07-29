import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import MissionSection from "@/components/home/MissionSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <FeaturesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <StatsSection />
      <CTASection />
    </>
  );
}