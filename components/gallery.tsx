"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      src: "/colonial-hotel-courtyard-with-fountain-and-arches-.jpg",
      alt: "Patio colonial",
      title: "Patio Colonial",
      description: "Un hermoso patio central con fuente y arquitectura colonial auténtica"
    },
    {
      src: "/hotel-swimming-pool-with-colonial-architecture-bac.jpg",
      alt: "Alberca",
      title: "Alberca",
      description: "Refrescante alberca rodeada de la belleza arquitectónica colonial"
    },
    {
      src: "/colonial-hotel-restaurant-interior-with-warm-light.jpg",
      alt: "Restaurante",
      title: "Restaurante",
      description: "Interior acogedor del restaurante con iluminación cálida y ambiente colonial"
    },
    {
      src: "/colonial-hotel-exterior-facade-at-sunset-in-alamos.jpg",
      alt: "Fachada del hotel",
      title: "Fachada del Hotel",
      description: "La majestuosa fachada del hotel al atardecer en Álamos"
    },
    {
      src: "/colonial-hotel-garden-with-tropical-plants.jpg",
      alt: "Jardines",
      title: "Jardines Tropicales",
      description: "Exuberantes jardines con plantas tropicales que adornan el hotel"
    },
    {
      src: "/colonial-hotel-bar-with-rustic-decor.jpg",
      alt: "Bar",
      title: "Bar Colonial",
      description: "Bar con decoración rústica que conserva el encanto de la época colonial"
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl mb-4 text-balance">Galería</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre la belleza y el encanto de Hotel La Mansión
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-black">
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeLightbox}
            />
            
            {/* Modal Content */}
            <div className="relative z-10 w-screen h-screen flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-4 text-white bg-black/20 backdrop-blur-sm">
                <div className="flex-1 pr-4">
                  <h3 className="text-xl md:text-2xl font-serif">{images[currentIndex].title}</h3>
                  <p className="text-xs md:text-sm text-white/80 mt-1">{images[currentIndex].description}</p>
                </div>
                <button
                  onClick={closeLightbox}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Image Container */}
              <div className="flex-1 flex items-center justify-center relative px-4 py-2">
                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 md:left-4 z-20 p-2 md:p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center px-12 md:px-16">
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-300"
                    style={{
                      maxWidth: 'calc(100vw - 8rem)',
                      maxHeight: 'calc(100vh - 12rem)'
                    }}
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  className="absolute right-2 md:right-4 z-20 p-2 md:p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                >
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center items-center p-3 md:p-4 gap-2 bg-black/20 backdrop-blur-sm">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
