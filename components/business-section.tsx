"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Zap, Crown, Building2 } from "lucide-react"

const pricingTiers = [
  {
    name: "Basic",
    price: "$0",
    period: "forever",
    description: "Perfect for trying Reportr with no commitment",
    features: ["5 meetings per week", "Unlimited reports", "Unlimited templates", "Calendar integration", "Basic support", "No credit card required"],
    icon: Zap,
    popular: false,
  },
  {
    name: "Professional",
    price: "$89",
    period: "per advisor/month",
    description: "Unlimited documents for busy advisors and established firms",
    features: [
      "Everything in Basic",
      "Unlimited meetings",
      "Priority support",
    ],
    icon: Crown,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "negotiated pricing",
    description: "Tailored solutions for large firms and dealerships",
    features: [
      "Everything in Professional",
      "White-label options",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "Volume discounts",
    ],
    icon: Building2,
    popular: false,
  },
]

export function BusinessSection() {
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
    <section id="pricing" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-playfair)]">
            <span className="gradient-text">Pricing Strategy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Start free, scale as you grow: from 5 meetings per week forever free, to unlimited meetings for busy advisors and established practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`relative transition-all duration-1000 hover:shadow-xl hover:-translate-y-2 ${
                tier.popular ? "border-primary shadow-lg scale-105" : ""
              } ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="mb-4 flex justify-center">
                    <div
                      className={`p-3 rounded-full ${tier.popular ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}
                    >
                      <tier.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground ml-1">/{tier.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
