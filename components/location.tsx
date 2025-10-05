"use client"

import { useState } from "react"
import { MapPin, Landmark, ChevronLeft, ChevronRight } from "lucide-react"

export function Location() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const attractions = [
    "Plaza de Armas",
    "Templo Purísima Concepción",
    "Museo Costumbrista",
    "Callejón del Beso",
    "Mercado Municipal",
    "Plaza Alameda",
  ]

  const locationImages = [
    {
      src: "/aerial-view-of-alamos-sonora-mexico-colonial-town-.jpg",
      alt: "Plaza de Armas de Álamos",
      title: "Plaza de Armas"
    },
    {
      src: "/colonial-hotel-exterior-facade-at-sunset-in-alamos.jpg",
      alt: "Templo de la Purísima Concepción",
      title: "Templo Purísima Concepción"
    },
    {
      src: "/colonial-mexican-hotel-exterior-with-arches-and-co.jpg",
      alt: "Museo Costumbrista de Sonora",
      title: "Museo Costumbrista"
    },
    {
      src: "/colonial-hotel-courtyard-with-fountain-and-arches-.jpg",
      alt: "Callejón del Beso en Álamos",
      title: "Callejón del Beso"
    },
    {
      src: "/colonial-hotel-garden-with-tropical-plants.jpg",
      alt: "Mercado Municipal de Álamos",
      title: "Mercado Municipal"
    },
    {
      src: "/hotel-swimming-pool-with-colonial-architecture-bac.jpg",
      alt: "Plaza Alameda de Álamos",
      title: "Plaza Alameda"
    }
  ]

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % locationImages.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + locationImages.length) % locationImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

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

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
            {/* Imagen principal del carrusel */}
            <img 
              src={locationImages[currentIndex].src} 
              alt={locationImages[currentIndex].alt} 
              className="w-full h-full object-cover transition-transform duration-500" 
            />
            
            {/* Overlay con título */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h4 className="text-white font-serif text-lg">{locationImages[currentIndex].title}</h4>
            </div>

            {/* Botón anterior */}
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Botón siguiente */}
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {locationImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
