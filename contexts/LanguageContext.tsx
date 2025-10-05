"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'

// Tipos para las traducciones
export type Language = 'es' | 'en'

export interface Translations {
  // Navigation
  nav: {
    home: string
    rooms: string
    gallery: string
    contact: string
    language: string
  }
  
  // Hero Section
  hero: {
    title: string
    subtitle: string
    reserveButton: string
    viewRoomsButton: string
  }
  
  // About Section
  about: {
    title: string
    subtitle: string
    description: string
    history: string
    architecture: string
    experience: string
  }
  
  // Rooms Section
  rooms: {
    title: string
    subtitle: string
    viewDetailsButton: string
    amenitiesTitle: string
    room1: {
      title: string
      subtitle: string
      description: string
      capacity: string
      bed: string
    }
    room2: {
      title: string
      subtitle: string
      description: string
      capacity: string
      bed: string
    }
    room3: {
      title: string
      subtitle: string
      description: string
      capacity: string
      bed: string
    }
    amenities: {
      breakfast: string
      fireplace: string
      wifi: string
      pool: string
    }
  }
  
  // Services Section
  services: {
    title: string
    subtitle: string
    restaurant: {
      title: string
      description: string
    }
    cafe: {
      title: string
      description: string
    }
    events: {
      title: string
      description: string
    }
    petFriendly: {
      title: string
      description: string
    }
    checkIn: {
      title: string
      hours: string
      availability: string
    }
  }
  
  // Gallery Section
  gallery: {
    title: string
    subtitle: string
    images: {
      facade: {
        alt: string
        title: string
        description: string
      }
      garden: {
        alt: string
        title: string
        description: string
      }
      gelato: {
        alt: string
        title: string
        description: string
      }
      restaurant: {
        alt: string
        title: string
        description: string
      }
      bar: {
        alt: string
        title: string
        description: string
      }
      facade2: {
        alt: string
        title: string
        description: string
      }
      garden2: {
        alt: string
        title: string
        description: string
      }
      pool: {
        alt: string
        title: string
        description: string
      }
      petFriendly: {
        alt: string
        title: string
        description: string
      }
    }
  }
  
  // Location Section
  location: {
    title: string
    subtitle: string
    hotelName: string
    description: string
    nearbyAttractions: string
    accessInfo: string
  }
  
  // Testimonials Section
  testimonials: {
    title: string
    subtitle: string
    reviews: {
      diego: {
        name: string
        location: string
        text: string
        rating: number
      }
      peter: {
        name: string
        location: string
        text: string
        rating: number
      }
      nancy: {
        name: string
        location: string
        text: string
        rating: number
      }
    }
  }
  
  // Contact Section
  contact: {
    title: string
    subtitle: string
    contactInfo: string
    whatsappLabel: string
    emailLabel: string
    alsoFindUs: string
    ourLocation: string
    locationDetails: string
    addressLabel: string
    address: string
    postalCodeLabel: string
    postalCode: string
    cityLabel: string
    city: string
    stateLabel: string
    state: string
    countryLabel: string
    country: string
    locationNote: string
    reserveButton: string
  }
  
  // Footer
  footer: {
    description: string
    quickLinks: string
    contact: string
    followUs: string
    rights: string
  }
  
  // WhatsApp Button
  whatsapp: {
    tooltip: string
  }
}

// Contexto de idioma
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Hook personalizado para usar el contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Traducciones
const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      rooms: 'Habitaciones',
      gallery: 'Galería',
      contact: 'Contacto',
      language: 'EN'
    },
    hero: {
      title: 'Vive la experiencia colonial de Álamos',
      subtitle: 'Un refugio de historia, arquitectura y calidez en el corazón de Sonora',
      reserveButton: 'Reservar Ahora',
      viewRoomsButton: 'Ver Habitaciones'
    },
    about: {
      title: 'Historia y Encanto Colonial',
      subtitle: 'Historia y tradición en cada rincón',
      description: 'En el corazón de Álamos, Sonora, se encuentra Hotel La Mansión, un refugio que combina la elegancia de la arquitectura colonial con la calidez de la hospitalidad mexicana. Ubicado a un costado del histórico Palacio Municipal, nuestro hotel te invita a sumergirte en la rica historia de uno de los Pueblos Mágicos más encantadores de México. Cada rincón cuenta una historia, cada detalle refleja el cuidado y la pasión por preservar la esencia de este lugar único. Disfruta de habitaciones cómodas con chimenea, una alberca refrescante, y nuestro restaurante-bar donde podrás saborear la auténtica gastronomía local.',
      history: 'Historia Viva',
      architecture: 'Arquitectura Colonial',
      experience: 'Experiencia Única'
    },
    rooms: {
      title: 'Nuestras Habitaciones',
      subtitle: 'Espacios diseñados para tu comodidad, con el encanto de la arquitectura colonial',
      viewDetailsButton: 'Ver Detalles',
      amenitiesTitle: 'Todas las habitaciones incluyen',
      room1: {
        title: 'Habitación Sencilla King',
        subtitle: 'Para 2 personas',
        description: 'Espaciosa habitación con cama King size, perfecta para parejas que buscan comodidad y privacidad.',
        capacity: '2 personas',
        bed: 'Cama King'
      },
      room2: {
        title: 'Habitación Doble Queen',
        subtitle: 'Para 4 personas',
        description: 'Amplia habitación con dos camas Queen size, ideal para familias que desean disfrutar juntos.',
        capacity: '4 personas',
        bed: '2 Camas Queen'
      },
      room3: {
        title: 'Habitación Premium',
        subtitle: 'Para 2 personas',
        description: 'Nuestra habitación más elegante con vista al jardín histórico',
        capacity: '2 personas',
        bed: 'Cama King'
      },
      amenities: {
        breakfast: 'Desayuno incluido',
        fireplace: 'Chimenea',
        wifi: 'WiFi gratis',
        pool: 'Acceso a alberca'
      }
    },
    services: {
      title: 'Servicios y Experiencias',
      subtitle: 'Todo lo que necesitas para una estancia inolvidable',
      restaurant: {
        title: 'Restaurante & Bar',
        description: 'Disfruta de auténtica gastronomía local en nuestro restaurante por las tardes'
      },
      cafe: {
        title: 'Cafetería',
        description: 'Café recién hecho y gelato artesanal durante todo el día'
      },
      events: {
        title: 'Eventos Especiales',
        description: 'Espacios únicos para celebraciones y eventos memorables'
      },
      petFriendly: {
        title: 'Pet Friendly',
        description: 'Tus mascotas son bienvenidas en Hotel La Mansión'
      },
      checkIn: {
        title: 'Check-in / Check-out',
        hours: '24 horas',
        availability: 'Disponible todos los días'
      }
    },
    gallery: {
      title: 'Galería',
      subtitle: 'Descubre la belleza y el encanto de Hotel La Mansión',
      images: {
        facade: {
          alt: 'Fachada del hotel',
          title: 'Fachada Principal',
          description: 'La elegante fachada colonial de Hotel La Mansión'
        },
        garden: {
          alt: 'Jardín del hotel',
          title: 'Jardines',
          description: 'Hermosos jardines que complementan la arquitectura colonial'
        },
        gelato: {
          alt: 'Gelato y café',
          title: 'Gelato & Café',
          description: 'Deliciosos gelatos artesanales y café recién hecho'
        },
        restaurant: {
          alt: 'Restaurante del hotel',
          title: 'Restaurante',
          description: 'Nuestro acogedor restaurante con ambiente colonial auténtico'
        },
        bar: {
          alt: 'Bar del hotel',
          title: 'Bar',
          description: 'Bar con decoración colonial y ambiente rústico encantador'
        },
        facade2: {
          alt: 'Vista alternativa de la fachada',
          title: 'Fachada Colonial',
          description: 'Otra perspectiva de nuestra hermosa arquitectura colonial'
        },
        garden2: {
          alt: 'Jardín alternativo',
          title: 'Áreas Verdes',
          description: 'Espacios naturales perfectos para el descanso y relajación'
        },
        pool: {
          alt: 'Alberca del hotel',
          title: 'Alberca',
          description: 'Refrescante alberca en un entorno colonial único'
        },
        petFriendly: {
          alt: 'Espacio pet friendly',
          title: 'Pet Friendly',
          description: 'Espacios especiales donde tus mascotas son bienvenidas'
        }
      }
    },
    location: {
      title: 'Ubicación Privilegiada',
      subtitle: 'En el corazón del centro histórico de Álamos',
      hotelName: 'Hotel La Mansión',
      description: 'Ubicado a un costado izquierdo del Palacio Municipal de Álamos, en el corazón de este Pueblo Mágico de Sonora, México.',
      nearbyAttractions: 'Atracciones Cercanas',
      accessInfo: 'Acceso por carretera • A pocos pasos de los principales sitios históricos'
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Huéspedes',
      subtitle: 'Experiencias reales de quienes nos han visitado',
      reviews: {
        diego: {
          name: 'Diego Martinez',
          location: 'California, USA',
          text: 'Muy cerca de la plaza principal, personal muy atentos, cuartos muy amplios y aún conserva esa imagen colonial, en lo personal fue algo que me encantó.',
          rating: 5
        },
        peter: {
          name: 'Peter Angulo',
          location: 'Ciudad de México',
          text: 'Un lugar maravilloso para hospedarse. Fácilmente una de las habitaciones más hermosas que he visto. La presión del agua es baja, así que no planees un baño a menos que estés ahí por una semana.',
          rating: 5
        },
        nancy: {
          name: 'Nancy Elena Regino',
          location: 'Arizona, USA',
          text: 'Excelente hospedaje, excelente ubicación',
          rating: 5
        }
      }
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Estamos aquí para ayudarte',
      contactInfo: 'Información de Contacto',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      alsoFindUs: 'También nos puedes encontrar en:',
      ourLocation: 'Nuestra Ubicación',
      locationDetails: 'Detalles de la Ubicación',
      addressLabel: 'Dirección:',
      address: 'Benito Juárez 20, Centro',
      postalCodeLabel: 'Código Postal:',
      postalCode: '85760',
      cityLabel: 'Ciudad:',
      city: 'Álamos',
      stateLabel: 'Estado:',
      state: 'Sonora',
      countryLabel: 'País:',
      country: 'México',
      locationNote: 'A un costado del lado izquierdo del Palacio Municipal de Álamos',
      reserveButton: 'Reservar por WhatsApp'
    },
    footer: {
      description: 'Hotel La Mansión, tu refugio colonial en el corazón de Álamos, Sonora.',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.'
    },
    whatsapp: {
      tooltip: 'Contáctanos por WhatsApp'
    }
  },
  en: {
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      gallery: 'Gallery',
      contact: 'Contact',
      language: 'ES'
    },
    hero: {
      title: 'Experience the colonial charm of Álamos',
      subtitle: 'A refuge of history, architecture and warmth in the heart of Sonora',
      reserveButton: 'Book Now',
      viewRoomsButton: 'View Rooms'
    },
    about: {
      title: 'History and Colonial Charm',
      subtitle: 'History and tradition in every corner',
      description: 'In the heart of Álamos, Sonora, lies Hotel La Mansión, a refuge that combines the elegance of colonial architecture with the warmth of Mexican hospitality. Located next to the historic Municipal Palace, our hotel invites you to immerse yourself in the rich history of one of Mexico\'s most charming Magic Towns. Every corner tells a story, every detail reflects the care and passion for preserving the essence of this unique place. Enjoy comfortable rooms with fireplaces, a refreshing pool, and our restaurant-bar where you can savor authentic local gastronomy.',
      history: 'Living History',
      architecture: 'Colonial Architecture',
      experience: 'Unique Experience'
    },
    rooms: {
      title: 'Our Rooms',
      subtitle: 'Spaces designed for your comfort, with the charm of colonial architecture',
      viewDetailsButton: 'View Details',
      amenitiesTitle: 'All rooms include',
      room1: {
        title: 'King Room',
        subtitle: 'For 2 guests',
        description: 'Spacious room with King size bed, perfect for couples seeking comfort and privacy.',
        capacity: '2 guests',
        bed: 'King Bed'
      },
      room2: {
        title: 'Double Queen Room',
        subtitle: 'For 4 guests',
        description: 'Large room with two Queen size beds, ideal for families who want to enjoy together.',
        capacity: '4 guests',
        bed: '2 Queen Beds'
      },
      room3: {
        title: 'Premium Room',
        subtitle: 'For 2 guests',
        description: 'Our most elegant room with historic garden view',
        capacity: '2 guests',
        bed: 'King Bed'
      },
      amenities: {
        breakfast: 'Breakfast included',
        fireplace: 'Fireplace',
        wifi: 'Free WiFi',
        pool: 'Pool access'
      }
    },
    services: {
      title: 'Services & Experiences',
      subtitle: 'Everything you need for an unforgettable stay',
      restaurant: {
        title: 'Restaurant & Bar',
        description: 'Enjoy authentic local gastronomy in our restaurant during the evenings'
      },
      cafe: {
        title: 'Coffee Shop',
        description: 'Fresh coffee and artisanal gelato throughout the day'
      },
      events: {
        title: 'Special Events',
        description: 'Unique spaces for celebrations and memorable events'
      },
      petFriendly: {
        title: 'Pet Friendly',
        description: 'Your pets are welcome at Hotel La Mansión'
      },
      checkIn: {
        title: 'Check-in / Check-out',
        hours: '24 hours',
        availability: 'Available every day'
      }
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Discover the beauty and charm of Hotel La Mansión',
      images: {
        facade: {
          alt: 'Hotel facade',
          title: 'Main Facade',
          description: 'The elegant colonial facade of Hotel La Mansión'
        },
        garden: {
          alt: 'Hotel garden',
          title: 'Gardens',
          description: 'Beautiful gardens that complement the colonial architecture'
        },
        gelato: {
          alt: 'Gelato and coffee',
          title: 'Gelato & Coffee',
          description: 'Delicious artisanal gelatos and fresh coffee'
        },
        restaurant: {
          alt: 'Hotel restaurant',
          title: 'Restaurant',
          description: 'Our cozy restaurant with authentic colonial atmosphere'
        },
        bar: {
          alt: 'Hotel bar',
          title: 'Bar',
          description: 'Bar with colonial decoration and charming rustic ambiance'
        },
        facade2: {
          alt: 'Alternative facade view',
          title: 'Colonial Facade',
          description: 'Another perspective of our beautiful colonial architecture'
        },
        garden2: {
          alt: 'Alternative garden',
          title: 'Green Areas',
          description: 'Natural spaces perfect for rest and relaxation'
        },
        pool: {
          alt: 'Hotel pool',
          title: 'Pool',
          description: 'Refreshing pool in a unique colonial setting'
        },
        petFriendly: {
          alt: 'Pet friendly space',
          title: 'Pet Friendly',
          description: 'Special spaces where your pets are welcome'
        }
      }
    },
    location: {
      title: 'Privileged Location',
      subtitle: 'In the heart of Álamos historic center',
      hotelName: 'Hotel La Mansión',
      description: 'Located next to the left side of the Municipal Palace of Álamos, in the heart of this Magic Town of Sonora, Mexico.',
      nearbyAttractions: 'Nearby Attractions',
      accessInfo: 'Road access • Steps away from main historic sites'
    },
    testimonials: {
      title: 'What Our Guests Say',
      subtitle: 'Real experiences from those who have visited us',
      reviews: {
        diego: {
          name: 'Diego Martinez',
          location: 'California, USA',
          text: 'Very close to the main square, very attentive staff, very spacious rooms and it still preserves that colonial image, personally it was something I loved.',
          rating: 5
        },
        peter: {
          name: 'Peter Angulo',
          location: 'Mexico City',
          text: 'A wonderful place to stay. Easily one of the most beautiful rooms I have seen. Water pressure is low so don\'t plan on a bath unless you are there for a week.',
          rating: 5
        },
        nancy: {
          name: 'Nancy Elena Regino',
          location: 'Arizona, USA',
          text: 'Excellent accommodation, excellent location',
          rating: 5
        }
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'We are here to help you',
      contactInfo: 'Contact Information',
      whatsappLabel: 'WhatsApp',
      emailLabel: 'Email',
      alsoFindUs: 'You can also find us on:',
      ourLocation: 'Our Location',
      locationDetails: 'Location Details',
      addressLabel: 'Address:',
      address: 'Benito Juárez 20, Centro',
      postalCodeLabel: 'Postal Code:',
      postalCode: '85760',
      cityLabel: 'City:',
      city: 'Álamos',
      stateLabel: 'State:',
      state: 'Sonora',
      countryLabel: 'Country:',
      country: 'Mexico',
      locationNote: 'Next to the left side of the Municipal Palace of Álamos',
      reserveButton: 'Book via WhatsApp'
    },
    footer: {
      description: 'Hotel La Mansión, your colonial refuge in the heart of Álamos, Sonora.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.'
    },
    whatsapp: {
      tooltip: 'Contact us via WhatsApp'
    }
  }
}

// Proveedor del contexto
interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Inicializar con español por defecto, pero podríamos detectar el idioma del navegador
  const [language, setLanguage] = useState<Language>('es')

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}