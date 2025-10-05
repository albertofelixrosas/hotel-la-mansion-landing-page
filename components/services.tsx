"use client"

import { Coffee, Calendar, Heart, UtensilsCrossed } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Services() {
  const { t } = useLanguage();
  const services = [
    {
      icon: UtensilsCrossed,
      title: t.services.restaurant.title,
      description: t.services.restaurant.description,
    },
    {
      icon: Coffee,
      title: t.services.cafe.title,
      description: t.services.cafe.description,
    },
    {
      icon: Calendar,
      title: t.services.events.title,
      description: t.services.events.description,
    },
    {
      icon: Heart,
      title: t.services.petFriendly.title,
      description: t.services.petFriendly.description,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 text-balance">{t.services.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center transition-transform group-hover:scale-110">
                <service.icon size={32} className="text-foreground" />
              </div>
              <h3 className="font-serif text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-background rounded-2xl p-8 shadow-sm">
            <p className="text-lg font-medium mb-2">{t.services.checkIn.title}</p>
            <p className="text-3xl font-serif text-foreground">{t.services.checkIn.hours}</p>
            <p className="text-sm text-muted-foreground mt-2">{t.services.checkIn.availability}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
