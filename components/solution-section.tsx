"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, FileCheck, Timer, Shield, KeyRound, Users } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Meeting Processing",
    description: "Built: Calendar integrated system to auto join meetings, process recordings with speaker identification, and generate bespoke documentation",
  },
  {
    icon: FileCheck,
    title: "Compliance Focused Templates",
    description: "Built: Highly comprehensive and customisable template library. SoA, RoA, and file note templates designed to meet each countries regulatory standards",
  },
  {
    icon: Shield,
    title: "Compliance Infrastructure",
    description: "Built: Architecture designed for secure document storage, encryption, and audit trails per ASIC requirements",
  },
  {
    icon: Users,
    title: "Built by Advisors + Security Experts",
    description: "Built: Co-designed with financial advisors across AU markets; engineered by security specialists with SOC 2/ISO 27001 in mind",
  },
  {
    icon: KeyRound,
    title: "SSO",
    description: "Built: Google/Microsoft SSO and Zoom OAuth; one‑click auto‑join from calendar invites",
  },
  {
    icon: Timer,
    title: "Time Savings at Scale",
    description: "Built: Turn multi-hour write-ups into minutes with automated drafting, smart reuse of client data, and one-click exports — freeing advisers to spend more time with clients.",
  }
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
              Building an AI co-pilot solution for financial advisors navigating
              regulation — our MVP transforms client conversations into compliant documentation for advisor review and finalisation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">SOC 2 Compliant</h4>
                  <p className="text-muted-foreground text-sm">
                    Roadmap: Actively working toward SOC 2 compliance as part of our commitment to security and trust
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-Signature Integration</h4>
                  <p className="text-muted-foreground text-sm">
                    Roadmap: Native DocuSign/Adobe Sign flow for rapid client approvals and automated filing
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Advisor Collaboration</h4>
                  <p className="text-muted-foreground text-sm">
                    Roadmap: Real-time co-authoring, comments, and role-based reviews to speed up document production
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Automated Monitoring of Regulatory Updates</h4>
                  <p className="text-muted-foreground text-sm">
                    Roadmap: Continuously monitors regulatory bodies for policy updates, automatically alerting advisers when changes affect their obligations or documentation requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">AFSL Approved Product List (APL)</h4>
                  <p className="text-muted-foreground text-sm">
                    Roadmap: targeted program for AFSL inclusion — due diligence package (security/compliance attestations,
                    SOC&nbsp;2/ISO&nbsp;27001 readiness), data residency, audit logs, legal review, and pilot references to meet APL requirements
                  </p>
                </div>
              </div>
            </div>

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
