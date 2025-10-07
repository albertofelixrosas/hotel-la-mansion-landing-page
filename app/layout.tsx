import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hotel La Mansión | Álamos, Sonora",
  description:
    "Vive la experiencia colonial de Álamos en Hotel La Mansión. Historia, arquitectura y calidez en el corazón de Sonora, México.",
  keywords: "hotel, Álamos, Sonora, México, colonial, pueblo mágico, hospedaje",
  openGraph: {
    title: "Hotel La Mansión | Álamos, Sonora",
    description: "Un refugio de historia y calidez en el corazón de Álamos",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <LanguageProvider>
            <Suspense fallback={null}>
              {children}
              <Analytics />
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
