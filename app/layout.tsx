import React from "react"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = "https://www.alumnix.com.ar"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alumnix | Software de Gestión Escolar para Argentina",
    template: "%s | Alumnix",
  },
  description:
    "Alumnix es el software de gestión escolar todo en uno para Argentina. Notas, asistencia, sanciones, mensajería, boletines y calendario escolar — en una sola plataforma.",
  keywords: [
    "software gestión escolar",
    "sistema escolar argentina",
    "plataforma educativa",
    "gestión académica",
    "notas y asistencia",
    "boletín escolar digital",
    "comunicación escolar",
    "alumnix",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Alumnix",
    title: "Alumnix | Software de Gestión Escolar para Argentina",
    description:
      "Notas, asistencia, sanciones, mensajería y calendario escolar — todo en un solo lugar. Diseñado para escuelas argentinas.",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alumnix | Software de Gestión Escolar para Argentina",
    description:
      "Notas, asistencia, sanciones, mensajería y calendario escolar — todo en un solo lugar.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Alumnix",
  url: siteUrl,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  description:
    "Plataforma de gestión escolar integral para instituciones educativas argentinas. Incluye notas, asistencia, sanciones, mensajería y calendario.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "ARS",
    description: "Demo gratuita disponible",
  },
  author: {
    "@type": "Organization",
    name: "Alumnix",
    url: siteUrl,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
