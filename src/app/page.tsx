import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import EducationSection from "@/components/education-section";
import HackathonSection from "@/components/hackathon-section";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/project-section";
import SkillSection from "@/components/skill-section";
import WorkSection from "@/components/work-section";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      
      <HeroSection BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      <AboutSection BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      {/* <WorkSection BLUR_FADE_DELAY={BLUR_FADE_DELAY} /> */}
      <EducationSection BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      <SkillSection BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      <ProjectSection BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      {/* <HackathonSection BLUR_FADE_DELAY={BLUR_FADE_DELAY} /> */}
      <ContactSection BLUR_FADE_DELAY={BLUR_FADE_DELAY} />    
    
    </main>
  );
}
