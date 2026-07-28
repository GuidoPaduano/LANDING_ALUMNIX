"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import logoColor from "@/imagenes/Logo Color.png"

const navLinks = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "FAQ", href: "#faq" },
  { label: "Hablemos", href: "#contacto" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#" aria-label="Ir al inicio"><Image src={logoColor} alt="Alumnix" className="h-10 w-auto" priority /></a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition hover:text-blue-700">{link.label}</a>)}
        </nav>
        <button type="button" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-800 lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-slate-50">{link.label}</a>)}
          </div>
        </nav>
      )}
    </header>
  )
}
