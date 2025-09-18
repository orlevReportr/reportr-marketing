"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse motion-reduce:animate-none"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000 motion-reduce:animate-none"></div>
        </div>

        

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 relative z-10">
          <div className="text-center max-w-4xl mx-auto overflow-visible">
            <div className={`transition-all duration-1000 overflow-visible ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} aria-hidden="true">
              <div className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight gradient-text font-[family-name:var(--font-playfair)] drop-shadow-sm select-none leading-[1.2] pb-2 mb-4 md:mb-6 overflow-visible">
                Reportr
              </div>
            </div>
            <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-playfair)] text-balance">
                Turn <span className="gradient-text">Conversations</span> into{" "}
                <span className="gradient-text">Compliant Documents</span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
                Reportr autonomously transforms your client meetings into professional, regulation-ready reports for
                financial advisors and regulated services.
              </p>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                  onClick={() => window.open('https://calendly.com/admin-reportr/30min', '_blank')}
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
              <div className="mt-12 text-sm text-muted-foreground">
                Trusted by financial advisors across Australia
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
