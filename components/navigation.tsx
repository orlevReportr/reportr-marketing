"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Problem", href: "#problem" },
  { name: "Solution", href: "#solution" },
  { name: "Pricing", href: "#pricing" },
  { name: "The Team", href: "#about" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Find which section is currently in view
      const sections = navItems.map(item => item.href.substring(1)) // Remove #
      let currentSection = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // We're on home page, scroll to element
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } else {
      // We're on a different page, navigate to home page with hash
      window.location.href = `/${href}`
    }
    setIsMobileMenuOpen(false)
  }

  const handleBookDemo = () => {
    window.open('https://calendly.com/admin-reportr/30min', '_blank')
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="text-2xl font-bold gradient-text font-[family-name:var(--font-playfair)] focus:outline-none focus:ring-2 focus:ring-ring/50 rounded"
                aria-label="Reportr Home"
              >
                Reportr
              </a>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Link href="/contact">
                <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Button>
              </Link>
              <Button className="bg-primary hover:bg-primary/90" onClick={handleBookDemo}>
                Book a Demo
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors ${
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </a>
                  )
                })}
                <div className="space-y-2 pt-4">
                  <Link href="/contact">
                    <Button variant="ghost" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleBookDemo}>
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
