"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingDown, Clock, FileText, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Time Drain",
    description: "Knowledge workers spend hours weekly turning meetings into notes, emails, and formal documents.",
    stat: "40%",
    statLabel: "of work time on admin",
  },
  {
    icon: TrendingDown,
    title: "Adviser Shortage",
    description: "Australia has ~15.5k registered advisers in 2025—down from ~25k in 2019.",
    stat: "38%",
    statLabel: "decline in advisers",
  },
  {
    icon: FileText,
    title: "Compliance Burden",
    description: "Admin and compliance requirements drag margins and cap capacity for client service.",
    stat: "7 years",
    statLabel: "document retention required",
  },
  {
    icon: AlertTriangle,
    title: "Generic Tools Fall Short",
    description: "AI notetakers create transcripts and summaries, not client-ready, compliant outputs.",
    stat: "0%",
    statLabel: "compliance-ready outputs",
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
            The universal pain of turning conversations into compliant, professional documents is crushing productivity
            and limiting growth in regulated industries.
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
