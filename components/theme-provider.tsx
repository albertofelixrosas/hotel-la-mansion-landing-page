'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
  useTheme
} from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeTransitionWrapper>{children}</ThemeTransitionWrapper>
    </NextThemesProvider>
  )
}

function ThemeTransitionWrapper({ children }: { children: React.ReactNode }) {
  const { theme, systemTheme } = useTheme()
  const [isChanging, setIsChanging] = useState(false)

  // Manejo convencional de transiciones de tema
  useEffect(() => {
    if (!theme) return

    // Marcar que estamos cambiando tema
    setIsChanging(true)
    document.documentElement.classList.add('theme-transitioning')

    // Remover la clase después de un breve momento
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning')
      setIsChanging(false)
    }, 100)

    return () => {
      clearTimeout(timer)
      document.documentElement.classList.remove('theme-transitioning')
    }
  }, [theme, systemTheme])

  return <>{children}</>
}
