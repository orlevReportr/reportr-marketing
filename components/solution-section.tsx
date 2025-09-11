"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bot, FileCheck, Zap, Shield, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Autonomous Meeting Join",
    description: "Automatically joins Zoom, Teams, or Meet calls and captures everything",
  },
  {
    icon: FileCheck,
    title: "Template-Driven Outputs",
    description: "Generates structured, client-ready documents tailored to your role and industry",
  },
  {
    icon: Zap,
    title: "Action Extraction",
    description: "Automatically extracts tasks and syncs with your CRM for better follow-through",
  },
  {
    icon: Shield,
    title: "Compliance-Ready",
    description: "Built-in compliance checks and audit-ready exports for regulated sectors",
  },
]

export function SolutionSection() {
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
    <section id="solution" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
              Meet <span className="gradient-text">Reportr</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              The first AI assistant that transforms your client conversations into professional, compliant
              documents—automatically.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Meeting → Report</h4>
                  <p className="text-muted-foreground text-sm">
                    One-click join generates draft statements, summaries, and follow-ups
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Template Engine</h4>
                  <p className="text-muted-foreground text-sm">
                    Array of highly customisable templates with advanced compliance checks
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Workflow Integration</h4>
                  <p className="text-muted-foreground text-sm">
                    Seamlessly connects with Google Meet and Microsoft Teams
                  </p>
                </div>
              </div>

							<div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Calendar Integration</h4>
                  <p className="text-muted-foreground text-sm">
                    Sign in with Google or Microsoft and integrate with your calendar
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  className={`transition-all duration-1000 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg w-fit">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
