# Hotel La Mansión 🏨

Un sitio web moderno y elegante para el Hotel La Mansión, desarrollado con Next.js, React y Tailwind CSS. Este proyecto presenta una interfaz de usuario atractiva con secciones completas para mostrar habitaciones, servicios, galería, testimonios y más.

## 🌟 Características

- **Interfaz moderna**: Diseño responsivo y atractivo
- **Secciones completas**: Hero, Sobre nosotros, Habitaciones, Servicios, Galería, Testimonios, Ubicación, Contacto
- **Optimizado para móviles**: Diseño completamente responsivo
- **Componentes reutilizables**: Arquitectura modular con componentes de UI
- **Botón de WhatsApp**: Contacto directo integrado
- **Tema personalizable**: Soporte para temas claro/oscuro

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15.2.4
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI
- **Iconos**: Lucide React
- **Formularios**: React Hook Form + Zod
- **Carrusel**: Embla Carousel
- **Notificaciones**: Sonner

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

- **Node.js** (versión 18.0 o superior)
  - Descargar desde: https://nodejs.org/
- **pnpm** (gestor de paquetes recomendado)

## 🚀 Instalación y Configuración

### 1. Verificar Node.js

Abre una terminal y verifica que Node.js esté instalado:

```bash
node --version
```

### 2. Instalar pnpm (si no lo tienes)

```bash
npm install -g pnpm
```

Verifica la instalación:

```bash
pnpm --version
```

### 3. Clonar o descargar el proyecto

Si el proyecto está en un repositorio, clónalo:

```bash
git clone [URL_DEL_REPOSITORIO]
cd hotel-la-mansion
```

### 4. Instalar dependencias

```bash
pnpm install
```

Este comando instalará todas las dependencias necesarias del proyecto.

## 🖥️ Ejecutar el Proyecto

### Desarrollo Local

Para levantar el servidor de desarrollo:

```bash
pnpm dev
```

El proyecto estará disponible en:
- **Local**: http://localhost:3000
- **Red**: http://[tu-ip]:3000

### Construcción para Producción

Para crear una versión optimizada para producción:

```bash
pnpm build
```

Para ejecutar la versión de producción:

```bash
pnpm start
```

### Otros Comandos Útiles

```bash
# Verificar errores de linting
pnpm lint

# Detener el servidor de desarrollo
# Presiona Ctrl + C en la terminal
```

## 📁 Estructura del Proyecto

```
hotel-la-mansion/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes de React
│   ├── ui/               # Componentes de UI reutilizables
│   ├── hero.tsx          # Sección Hero
│   ├── about.tsx         # Sección Sobre nosotros
│   ├── rooms.tsx         # Sección Habitaciones
│   ├── services.tsx      # Sección Servicios
│   ├── gallery.tsx       # Galería de imágenes
│   ├── testimonials.tsx  # Testimonios
│   ├── location.tsx      # Ubicación y mapa
│   ├── contact.tsx       # Formulario de contacto
│   ├── footer.tsx        # Pie de página
│   ├── navigation.tsx    # Barra de navegación
│   └── whatsapp-button.tsx # Botón de WhatsApp
├── hooks/                # Custom hooks
├── lib/                  # Utilidades y configuraciones
├── public/               # Archivos estáticos (imágenes, logos)
├── styles/               # Estilos adicionales
├── package.json          # Dependencias y scripts
├── next.config.mjs       # Configuración de Next.js
├── tailwind.config.js    # Configuración de Tailwind CSS
└── tsconfig.json         # Configuración de TypeScript
```

## 🎨 Personalización

### Modificar Contenido

- **Textos e información**: Edita los componentes en `/components/`
- **Imágenes**: Reemplaza las imágenes en `/public/`
- **Estilos**: Modifica `/app/globals.css` o los componentes individuales
- **Configuración**: Ajusta `next.config.mjs` según tus necesidades

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `/components/`
2. Impórtalo en `/app/page.tsx`
3. Agrégalo al layout principal

## 🔧 Solución de Problemas

### Error "pnpm no se reconoce"
```bash
npm install -g pnpm
```

### Errores de dependencias
```bash
# Limpiar node_modules y reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Puerto 3000 ocupado
```bash
# Usar un puerto diferente
pnpm dev -- -p 3001
```

## 📱 Funcionalidades Implementadas

- ✅ Diseño responsivo para móviles y desktop
- ✅ Navegación suave entre secciones
- ✅ Galería de imágenes interactiva
- ✅ Formulario de contacto funcional
- ✅ Integración con WhatsApp
- ✅ Carrusel de testimonios
- ✅ Sección de habitaciones con detalles
- ✅ Mapa de ubicación
- ✅ Optimización SEO básica

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado. Todos los derechos reservados.

## 📞 Soporte

Si tienes problemas o preguntas:

1. Revisa la sección de **Solución de Problemas**
2. Verifica que tengas las versiones correctas de Node.js y pnpm
3. Asegúrate de haber ejecutado `pnpm install` correctamente

---

**¡Disfruta desarrollando con Hotel La Mansión!** 🚀