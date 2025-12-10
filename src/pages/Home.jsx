import { AboutSection } from "@/sections/AboutSection"
import { ContactSection } from "@/sections/ContactSection"
import { HeroSection } from "@/sections/HeroSection"
import { ProjectSection } from "@/sections/ProjectSection"

export const HomePage = () => {
    return (
        <div className="bg-background min-h-screen">
            {/* HERO SECTION */}
            <HeroSection />

            {/* ABOUT SECTION */}
            <AboutSection />
            {/* PROJECTS SECTION */}
            <ProjectSection />

            {/* FOOTER CONTACTS */}
            <ContactSection />
        </div>
    )
}