"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", school: "", email: "", students: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setFormData({ ...formData, [event.target.name]: event.target.value })
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError((data as { detail?: string }).detail || "Error al enviar. Intentá más tarde.")
        return
      }
      setSent(true)
      setFormData({ name: "", school: "", email: "", students: "", message: "" })
    } catch {
      setError("Error de conexión. Revisá tu internet e intentá nuevamente.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <section id="contacto" className="scroll-mt-18 bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="overflow-hidden rounded-[2rem] bg-blue-700 shadow-[0_30px_80px_-35px_rgba(29,78,216,0.7)]"><div className="grid lg:grid-cols-[0.85fr_1.15fr]">
      <div className="relative overflow-hidden p-8 text-white sm:p-12 lg:p-14"><div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-cyan-300/20 blur-2xl" /><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">Hablemos</p><h2 className="mt-4 text-balance font-title text-3xl font-semibold leading-tight sm:text-4xl">Descubrí cómo Alumnix puede ayudar a tu escuela.</h2><p className="mt-5 leading-7 text-blue-100">Coordiná una conversación con nuestro equipo y conocé la plataforma aplicada a tu institución.</p><ul className="mt-8 space-y-4">{["Demo personalizada", "Asesoramiento sin compromiso", "Implementación acompañada"].map((item) => <li key={item} className="flex items-center gap-3 text-sm font-bold"><CheckCircle2 className="size-5 text-cyan-300" />{item}</li>)}</ul></div>
      {sent ? (
        <div className="flex flex-col items-center justify-center gap-4 bg-white p-8 sm:p-12 lg:p-14 text-center">
          <CheckCircle2 className="size-14 text-blue-600" />
          <h3 className="text-2xl font-bold text-slate-950">¡Mensaje recibido!</h3>
          <p className="text-slate-500">Nos pondremos en contacto a la brevedad.</p>
          <button onClick={() => setSent(false)} className="mt-2 text-sm font-semibold text-blue-600 hover:underline">Enviar otro mensaje</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-5 bg-white p-8 sm:grid-cols-2 sm:p-12 lg:p-14"><div className="space-y-2 sm:col-span-2"><h3 className="text-2xl font-bold text-slate-950">Solicitar una demo</h3><p className="text-sm text-slate-500">Completá tus datos y nos pondremos en contacto.</p></div><div className="space-y-2"><Label htmlFor="name">Nombre completo</Label><Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Juan Pérez" required className="h-12 rounded-xl" /></div><div className="space-y-2"><Label htmlFor="school">Institución</Label><Input id="school" name="school" value={formData.school} onChange={handleChange} placeholder="Nombre de la escuela" required className="h-12 rounded-xl" /></div><div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="nombre@escuela.edu.ar" required className="h-12 rounded-xl" /></div><div className="space-y-2"><Label htmlFor="students">Cantidad de alumnos</Label><Input id="students" name="students" type="number" value={formData.students} onChange={handleChange} placeholder="500" className="h-12 rounded-xl" /></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="message">¿Qué necesitás resolver?</Label><Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Contanos brevemente sobre tu institución..." rows={3} className="rounded-xl" /></div>{error && <p className="sm:col-span-2 text-sm text-red-600">{error}</p>}<Button type="submit" disabled={loading} className="h-12 rounded-full bg-slate-950 text-base hover:bg-blue-800 sm:col-span-2 disabled:opacity-60">{loading ? "Enviando…" : <><span>Enviar solicitud</span><ArrowRight /></>}</Button></form>
      )}
    </div></div></div></section>
  )
}
