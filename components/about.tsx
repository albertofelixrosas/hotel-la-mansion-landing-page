"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export function About() {
  const { t } = useLanguage()
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 text-balance">{t.about.title}</h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              {t.about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
