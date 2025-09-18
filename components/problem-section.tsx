"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, Clock, FileText, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Shrinking Adviser Workforce",
    description: "Regulatory change has driven adviser exits worldwide (e.g. 42% decline in Australia since 2019), leaving those who remain under intense efficiency pressure.",
    stat: "42%",
    statLabel: "adviser decline (AU since 2019)",
  },
  {
    icon: FileText,
    title: "Heavy Documentation Burden",
    description: "Advisers face strict record-keeping rules across markets — from 7-year retention in AU/NZ to 5-year suitability records in the UK. SoAs, RoAs, and review notes must be audit-ready.",
    stat: "5 - 7 yrs",
    statLabel: "mandatory record retention",
  },
  {
    icon: Clock,
    title: "Time and Cost Drain",
    description: "Up to 60% of the cost of providing advice is swallowed by compliance paperwork, reducing client-facing time and driving adviser burnout.",
    stat: "60%",
    statLabel: "of advice costs are admin",
  },
  {
    icon: AlertTriangle,
    title: "Generic AI Tools Fall Short",
    description: "Consumer-grade AI tools produce transcripts but ignore regulatory standards. Advisors need jurisdiction-specific documents, not just meeting notes.",
    stat: "0%",
    statLabel: "compliance built-in",
  },
]

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="problem" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            Documentation Is the <span className="gradient-text">Bottleneck</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Regulators worldwide have tightened documentation and record-keeping expectations for financial advice. Generic AI tools rarely address these jurisdiction-specific requirements, leaving advisors without the compliance safeguards they need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card
              key={problem.title}
              className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <problem.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{problem.description}</p>
                <div className="border-t pt-4">
                  <div className="text-3xl font-bold text-primary mb-1">{problem.stat}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">{problem.statLabel}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
