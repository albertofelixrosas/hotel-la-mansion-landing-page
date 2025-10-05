"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { key: "home", section: "hero" },
    { key: "rooms", section: "rooms" },
    { key: "gallery", section: "gallery" },
    { key: "contact", section: "contact" }
  ]

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Hotel La Mansión" width={180} height={60} className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-serif group px-2 py-1 hover:scale-105"
              >
                {t.nav[item.key as keyof typeof t.nav]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguage(language === "es" ? "en" : "es")} 
              className="text-sm hover:bg-primary/10 hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              {t.nav.language}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left text-foreground hover:text-primary transition-all duration-300 font-serif hover:translate-x-2 hover:bg-primary/5 px-3 py-2 rounded-md"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </button>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguage(language === "es" ? "en" : "es")} 
              className="text-sm hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
            >
              {language === "es" ? "English" : "Español"}
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
