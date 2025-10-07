"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  alt?: string
}

export function Logo({ 
  width = 180, 
  height = 60, 
  className = "", 
  alt = "Hotel La Mansión" 
}: LogoProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()

  // Evitar problemas de hidratación con next-themes
  useEffect(() => {
    setMounted(true)
  }, [])

  // Usar logo original con filtro CSS como solución temporal
  const logoSrc = '/logo.png'
  
  // Determinar si necesitamos invertir el logo
  const shouldInvert = mounted && (resolvedTheme === 'dark' || theme === 'dark')

  return (
    <Image
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      className={`h-12 w-auto transition-all duration-300 ${shouldInvert ? 'brightness-0 invert' : ''} ${className}`}
      priority
      onError={(e) => {
        console.error('❌ Logo failed to load:', {
          src: logoSrc,
          naturalWidth: e.currentTarget.naturalWidth,
          naturalHeight: e.currentTarget.naturalHeight,
          currentSrc: e.currentTarget.currentSrc
        })
      }}
      onLoad={() => {
        console.log('✅ Logo loaded successfully:', logoSrc)
      }}
    />
  )
}