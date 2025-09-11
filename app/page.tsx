import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { BusinessSection } from "@/components/business-section"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home" className="scroll-mt-24 md:scroll-mt-28">
        <HeroSection />
      </section>
      <section id="problem" className="scroll-mt-24 md:scroll-mt-28">
        <ProblemSection />
      </section>
      <section id="solution" className="scroll-mt-24 md:scroll-mt-28">
        <SolutionSection />
      </section>
      <section id="pricing" className="scroll-mt-24 md:scroll-mt-28">
        <BusinessSection />
      </section>
      <section id="about" className="scroll-mt-24 md:scroll-mt-28">
        <AboutSection />
      </section>
    </main>
  )
}
