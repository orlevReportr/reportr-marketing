"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former McKinsey consultant with 8+ years in financial services. Led digital transformation at Commonwealth Bank.",
    image: "/professional-headshot-of-asian-woman-ceo.jpg",
    linkedin: "#",
    twitter: "#",
    email: "sarah@reportr.ai",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Ex-Google AI engineer. Built ML systems at scale for 10+ years. PhD in Computer Science from Stanford.",
    image: "/professional-headshot-of-hispanic-man-cto.jpg",
    linkedin: "#",
    twitter: "#",
    email: "marcus@reportr.ai",
  },
  {
    name: "Dr. Emily Watson",
    role: "Head of Compliance",
    bio: "Former ASIC regulatory specialist. 15+ years ensuring financial services compliance across Australia.",
    image: "/professional-headshot-of-woman-compliance-officer.jpg",
    linkedin: "#",
    twitter: "#",
    email: "emily@reportr.ai",
  },
  {
    name: "James Park",
    role: "Head of Product",
    bio: "Product leader from Atlassian. Shipped enterprise software used by millions of knowledge workers.",
    image: "/professional-headshot-of-asian-man-product-manager.jpg",
    linkedin: "#",
    twitter: "#",
    email: "james@reportr.ai",
  },
]

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            About <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A world-class team combining deep financial services expertise with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className={`transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>

                <div className="flex justify-center space-x-3">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Why We Built Reportr</h3>
              <p className="text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                After witnessing countless hours wasted on manual documentation in regulated industries, we knew there
                had to be a better way. Our team combines decades of financial services experience with world-class AI
                expertise to solve this problem once and for all. We're not just building software—we're transforming
                how professionals work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
