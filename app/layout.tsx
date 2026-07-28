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
    "Software de gestión escolar para Argentina. Centralizá notas, asistencia, boletines, sanciones, mensajes y calendario en una sola plataforma.",
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Alumnix",
      alternateName: "Alumnix Gestión Escolar",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Alumnix",
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      areaServed: "AR",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        areaServed: "AR",
        availableLanguage: "Spanish",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Alumnix",
      url: siteUrl,
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      description:
        "Plataforma de gestión escolar integral para instituciones educativas argentinas. Incluye notas, asistencia, sanciones, mensajería y calendario.",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
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
