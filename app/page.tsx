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
      <section id="home">
        <HeroSection />
      </section>
      <section id="problem">
        <ProblemSection />
      </section>
      <section id="solution">
        <SolutionSection />
      </section>
      <section id="pricing">
        <BusinessSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
    </main>
  )
}
