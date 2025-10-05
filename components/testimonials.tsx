"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function Testimonials() {
  const { t } = useLanguage();
  const testimonials = [
    {
      name: t.testimonials.reviews.diego.name,
      location: t.testimonials.reviews.diego.location,
      text: t.testimonials.reviews.diego.text,
      rating: t.testimonials.reviews.diego.rating,
    },
    {
      name: t.testimonials.reviews.peter.name,
      location: t.testimonials.reviews.peter.location,
      text: t.testimonials.reviews.peter.text,
      rating: t.testimonials.reviews.peter.rating,
    },
    {
      name: t.testimonials.reviews.nancy.name,
      location: t.testimonials.reviews.nancy.location,
      text: t.testimonials.reviews.nancy.text,
      rating: t.testimonials.reviews.nancy.rating,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 text-balance">{t.testimonials.title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6 md:p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  {/* <p className="text-sm text-muted-foreground">{testimonial.location}</p> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
