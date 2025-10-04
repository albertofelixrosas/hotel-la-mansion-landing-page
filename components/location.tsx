import { MapPin, Landmark } from "lucide-react"

export function Location() {
  const attractions = [
    "Plaza de Armas",
    "Templo Purísima Concepción",
    "Museo Costumbrista",
    "Callejón del Beso",
    "Mercado Municipal",
    "Plaza Alameda",
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 text-balance">Ubicación Privilegiada</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            En el corazón del centro histórico de Álamos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-foreground mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-serif text-2xl mb-2">Hotel La Mansión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ubicado a un costado izquierdo del Palacio Municipal de Álamos, en el corazón de este Pueblo Mágico de
                  Sonora, México.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="text-foreground" size={20} />
                <h4 className="font-semibold">Atracciones Cercanas</h4>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {attractions.map((attraction) => (
                  <li key={attraction} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              Acceso por carretera • A pocos pasos de los principales sitios históricos
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img src="/aerial-view-of-alamos-sonora-mexico-colonial-town-.jpg" alt="Mapa de ubicación" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
