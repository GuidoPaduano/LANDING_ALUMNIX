"use client"

import React from "react"
import Image from "next/image"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  GraduationCap,
  ClipboardCheck,
  AlertTriangle,
  Mail,
  Calendar,
  Shield,
  Users,
  BookOpen,
  UserCheck,
  Baby,
  User,
  Lock,
  Database,
  Activity,
  Gauge,
  ChevronRight,
  Bell,
  FileText,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react"
import logoColor from "@/imagenes/Logo Color.png"

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: "Funcionalidades", href: "#features" },
    { label: "Roles", href: "#roles" },
    { label: "Seguridad", href: "#security" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src={logoColor}
            alt="Aulify"
            className="h-10 w-auto sm:h-11"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact">Solicitar acceso</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Solicitar acceso
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

// Hero Section
function HeroSection() {
  const stats = [
    { value: "500+", label: "Usuarios activos", note: "ilustrativo" },
    { value: "5", label: "Roles disponibles", note: "Admin, Docente, Preceptor, Padre, Alumno" },
    { value: "40%", label: "Tiempo ahorrado", note: "estimación" },
  ]

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              La gestión escolar simplificada
            </h1>
            <p className="text-pretty text-lg text-muted-foreground sm:text-xl">
              Notas, asistencia, sanciones, mensajería y calendario escolar — todo en un solo lugar.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  Solicitar acceso
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">Ver funcionalidades</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardHeader className="border-b bg-muted/50 pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-medium">Panel de control</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <span className="text-xs text-muted-foreground">En línea</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                {/* Notifications */}
                <div className="mb-4 rounded-lg bg-primary/10 p-3">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">3 notificaciones nuevas</span>
                  </div>
                </div>
                
                {/* Dashboard Cards Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border bg-card p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="rounded-md bg-chart-1/10 p-2">
                        <GraduationCap className="h-4 w-4 text-chart-1" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Notas</p>
                        <p className="text-sm font-semibold">24 pendientes</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="rounded-md bg-accent/10 p-2">
                        <ClipboardCheck className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Asistencia</p>
                        <p className="text-sm font-semibold">98% hoy</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="rounded-md bg-chart-5/10 p-2">
                        <AlertTriangle className="h-4 w-4 text-chart-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Sanciones</p>
                        <p className="text-sm font-semibold">2 esta semana</p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card p-3 shadow-sm">
                    <div className="flex items-center gap-2">
                      <div className="rounded-md bg-chart-4/10 p-2">
                        <Calendar className="h-4 w-4 text-chart-4" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Calendario</p>
                        <p className="text-sm font-semibold">5 eventos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 rounded-lg border bg-card p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">PDF generado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border bg-card p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">({stat.note})</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Notas y reportes PDF",
      description: "Carga y consulta de calificaciones por materia. Genera boletines en PDF con un clic.",
    },
    {
      icon: ClipboardCheck,
      title: "Asistencia completa",
      description: "Registra Presente, Ausente o Tarde con detalles. Historial completo por alumno.",
    },
    {
      icon: AlertTriangle,
      title: "Libro de sanciones",
      description: "Registro de amonestaciones y observaciones con fecha, motivo y seguimiento.",
    },
    {
      icon: Mail,
      title: "Mensajería interna",
      description: "Bandeja de entrada, comunicados y anuncios para toda la comunidad escolar.",
    },
    {
      icon: Calendar,
      title: "Calendario escolar",
      description: "Eventos por curso y tipo: exámenes, entregas, actos. Filtros y vistas personalizadas.",
    },
    {
      icon: Shield,
      title: "Permisos y auditoría",
      description: "Control de acceso por rol. Registro de todas las acciones para trazabilidad.",
    },
  ]

  return (
    <section id="features" className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Todo lo que necesita tu escuela
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Funcionalidades diseñadas para simplificar la gestión académica diaria.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Roles Section
function RolesSection() {
  const roles = [
    {
      icon: Users,
      title: "Admin / Directivos",
      description: "Acceso total: configuración, reportes globales y gestión de usuarios.",
    },
    {
      icon: BookOpen,
      title: "Docentes",
      description: "Carga de notas, asistencia y comunicación con alumnos y padres.",
    },
    {
      icon: UserCheck,
      title: "Preceptores",
      description: "Gestión de asistencia, sanciones y seguimiento de alumnos.",
    },
    {
      icon: Baby,
      title: "Padres",
      description: "Consulta de notas, asistencia, calendario y comunicación con la escuela.",
    },
    {
      icon: User,
      title: "Alumnos",
      description: "Vista de sus propias notas, asistencia y eventos del calendario.",
    },
  ]

  return (
    <section id="roles" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Un rol para cada usuario
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Cada persona accede solo a lo que necesita. Seguro y organizado.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {roles.map((role) => (
            <Card key={role.title} className="text-center transition-shadow hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <role.icon className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-base">{role.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{role.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Security Section
function SecuritySection() {
  const securityItems = [
    { icon: Lock, label: "HTTPS en todas las conexiones" },
    { icon: Database, label: "Backups automáticos de base de datos" },
    { icon: Activity, label: "Monitoreo y alertas en tiempo real" },
    { icon: Gauge, label: "Rate limiting para prevenir abusos" },
    { icon: Shield, label: "Separación clara de roles y permisos" },
  ]

  return (
    <section id="security" className="bg-foreground py-16 text-background sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Seguridad y privacidad
            </h2>
            <p className="mt-4 text-pretty text-lg text-background/80">
              Los datos escolares son sensibles. Por eso implementamos las mejores prácticas de seguridad para proteger la información de alumnos, padres y personal.
            </p>
            <p className="mt-4 text-background/70">
              Cumplimos con estándares de protección de datos y mantenemos tu información segura las 24 horas.
            </p>
          </div>

          {/* Right Column - Checklist Card */}
          <Card className="bg-background/10 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-background">Checklist técnico</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {securityItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/20">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-sm text-background/90">{item.label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Demo CTA Section
function DemoCTASection() {
  const steps = [
    { number: "1", title: "Crear", description: "Configura tu escuela y usuarios en minutos." },
    { number: "2", title: "Notificar", description: "Invita a docentes, preceptores y familias." },
    { number: "3", title: "Consultar", description: "Accede a notas, asistencia y más al instante." },
  ]

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Comienza en 3 simples pasos
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Sin complicaciones. Tu escuela funcionando en minutos.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-0.5 w-full bg-border sm:block" />
                )}
                <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <a href="#contact">
                Solicitar demo gratuita
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "¿Es compatible con celulares?",
      answer: "Sí, Aulify es 100% responsive. Funciona perfectamente en celulares, tablets y computadoras. Los padres y alumnos pueden consultar información desde cualquier dispositivo.",
    },
    {
      question: "¿Padres y alumnos comparten usuario?",
      answer: "No, cada persona tiene su propio usuario con permisos específicos. Los padres ven información de sus hijos, mientras que los alumnos solo ven su propia información.",
    },
    {
      question: "¿Puedo generar reportes en PDF?",
      answer: "Sí, puedes generar boletines de notas, reportes de asistencia y otros documentos en PDF con un solo clic. Listos para imprimir o enviar por email.",
    },
    {
      question: "¿Las notificaciones por email son opcionales?",
      answer: "Sí, cada usuario puede configurar sus preferencias de notificación. Pueden elegir recibir alertas por email para ciertos eventos o desactivarlas por completo.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Respuestas a las dudas más comunes sobre Aulify.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    email: "",
    students: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Demo-only submit handler
    alert(
      `¡Gracias ${formData.name}! Hemos recibido tu solicitud para ${formData.school}. Te contactaremos pronto.`
    )
    setFormData({ name: "", school: "", email: "", students: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Pitch */}
          <div>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              ¿Listo para modernizar tu escuela?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Completa el formulario y nos pondremos en contacto para coordinar una demo personalizada.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Demo gratuita sin compromiso",
                "Implementación guiada",
                "Soporte en español",
                "Capacitación incluida",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Form */}
          <Card>
            <CardHeader>
              <CardTitle>Solicitar acceso</CardTitle>
              <CardDescription>
                Completa tus datos y te contactaremos en 24-48 horas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="school">Nombre de la escuela</Label>
                  <Input
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    placeholder="Escuela N° 123"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@escuela.edu.ar"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="students">Cantidad de alumnos</Label>
                  <Input
                    id="students"
                    name="students"
                    type="number"
                    value={formData.students}
                    onChange={handleChange}
                    placeholder="500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu escuela..."
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar solicitud
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  * Conectar a backend más adelante
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  const links = [
    { label: "Funcionalidades", href: "#features" },
    { label: "Roles", href: "#roles" },
    { label: "Seguridad", href: "#security" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contact" },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Aulify</span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aulify
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function AulifyLandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RolesSection />
        <SecuritySection />
        <DemoCTASection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
