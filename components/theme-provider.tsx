'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme
} from 'next-themes'
import { useEffect } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeTransitionWrapper>{children}</ThemeTransitionWrapper>
    </NextThemesProvider>
  )
}

function ThemeTransitionWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  // Evita el lag al cambiar de tema
  useEffect(() => {
    const html = document.documentElement
    let timeoutId: NodeJS.Timeout

    const handleThemeChange = () => {
      // Deshabilitar transiciones temporalmente
      html.classList.add('disable-theme-transitions')
      
      // Limpiar timeout anterior si existe
      if (timeoutId) clearTimeout(timeoutId)
      
      // Re-habilitar transiciones después del cambio
      timeoutId = setTimeout(() => {
        html.classList.remove('disable-theme-transitions')
      }, 150) // Tiempo suficiente para que complete el cambio
    }

    // Solo ejecutar cuando el tema realmente cambie
    if (theme) {
      handleThemeChange()
    }

    // Cleanup
    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [theme])

  return <>{children}</>
}
