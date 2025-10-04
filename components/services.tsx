import { Coffee, Calendar, Heart, UtensilsCrossed } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: UtensilsCrossed,
      title: "Restaurante & Bar",
      description: "Disfruta de auténtica gastronomía local en nuestro restaurante por las tardes",
    },
    {
      icon: Coffee,
      title: "Cafetería",
      description: "Café recién hecho y gelato artesanal durante todo el día",
    },
    {
      icon: Calendar,
      title: "Eventos Especiales",
      description: "Espacios únicos para celebraciones y eventos memorables",
    },
    {
      icon: Heart,
      title: "Pet Friendly",
      description: "Tus mascotas son bienvenidas en Hotel La Mansión",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 text-balance">Servicios y Experiencias</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todo lo que necesitas para una estancia inolvidable
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
            <p className="text-lg font-medium mb-2">Check-in / Check-out</p>
            <p className="text-3xl font-serif text-foreground">24 horas</p>
            <p className="text-sm text-muted-foreground mt-2">Disponible todos los días</p>
          </div>
        </div>
      </div>
    </section>
  )
}
