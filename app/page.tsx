import Image from "next/image"
import {
  Activity, ArrowRight, BarChart3, Bell, BookOpen, CalendarDays, Check,
  CheckCircle2, ClipboardCheck, FileText, GraduationCap,
  LayoutDashboard, LockKeyhole, Mail, MessageSquareText, MoreHorizontal,
  ShieldCheck, UserCheck, Users,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import logoColor from "@/imagenes/Logo Color.png"
import iconColor from "@/imagenes/Icono Color.png"
import Header from "./_header"
import ContactSection from "./_contact-section"

const navLinks = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Comunidad", href: "#comunidad" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "FAQ", href: "#faq" },
  { label: "Hablemos", href: "#contacto" },
]

const DEMO_NAMES = ["Mariana", "Santiago", "Valentina", "Lucía", "Tomás", "Marcos", "Matías", "Carolina"]

function getDailyName() {
  const dayIndex = Math.floor(Date.now() / (1000 * 60 * 60 * 24))
  return DEMO_NAMES[dayIndex % DEMO_NAMES.length]
}

function ProductPreview() {
  const chart = [38, 56, 43, 72, 61, 82, 74, 91]
  const greetingName = getDailyName()
  const today = new Date()
  const todayLabel = today.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" })
  const todayDisplay = todayLabel.charAt(0).toUpperCase() + todayLabel.slice(1)
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
      <div className="absolute -inset-8 -z-10 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 p-2 shadow-[0_35px_90px_-30px_rgba(15,23,42,0.65)] sm:rounded-[2rem] sm:p-3">
        <div className="overflow-hidden rounded-[1.1rem] bg-slate-50 sm:rounded-[1.4rem]">
          <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-white px-4">
            <div className="flex gap-1.5"><span className="size-2.5 rounded-full bg-red-400" /><span className="size-2.5 rounded-full bg-amber-400" /><span className="size-2.5 rounded-full bg-emerald-400" /></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Panel institucional</span>
            <Bell className="size-4 text-slate-400" />
          </div>
          <div className="flex min-h-[390px] sm:min-h-[450px]">
            <aside className="hidden w-15 shrink-0 flex-col items-center gap-3 border-r border-slate-200 bg-white py-5 sm:flex">
              <Image src={iconColor} alt="" className="mb-2 size-8 object-contain" priority />
              {[LayoutDashboard, GraduationCap, ClipboardCheck, Mail, CalendarDays].map((Icon, index) => <div key={index} className={`grid size-9 place-items-center rounded-xl ${index === 0 ? "bg-blue-600 text-white" : "text-slate-400"}`}><Icon className="size-4" /></div>)}
            </aside>
            <div className="min-w-0 flex-1 p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div><p className="text-xs font-semibold text-blue-600">{todayDisplay}</p><h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-xl">Buen día, {greetingName}</h3></div>
                <div className="grid size-9 place-items-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">DR</div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {[["Asistencia", "94,8%", "bg-emerald-50 text-emerald-700"], ["Alumnos", "486", "bg-blue-50 text-blue-700"], ["Mensajes", "12", "bg-violet-50 text-violet-700"]].map(([label, value, style]) => (
                  <div key={label} className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm sm:p-4"><span className={`inline-block rounded-md px-1.5 py-1 text-[8px] font-bold uppercase sm:text-[9px] ${style}`}>{label}</span><p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{value}</p></div>
                ))}
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1.45fr_1fr]">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between"><div><p className="text-xs font-bold text-slate-800">Asistencia semanal</p><p className="text-[10px] text-slate-400">Últimos 8 días</p></div><MoreHorizontal className="size-4 text-slate-400" /></div>
                  <div className="mt-4 flex h-28 items-end gap-2">{chart.map((height, index) => <div key={index} className="flex-1 rounded-t bg-blue-100" style={{ height: `${height}%` }}><div className="h-full rounded-t bg-gradient-to-t from-blue-600 to-cyan-400 opacity-90" /></div>)}</div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-bold text-slate-800">Actividad reciente</p>
                  <div className="mt-3 space-y-3">{["Calificaciones cargadas", "Nuevo comunicado", "Reporte generado"].map((item, index) => <div key={item} className="flex gap-2"><span className={`mt-1 size-2 shrink-0 rounded-full ${["bg-blue-500", "bg-violet-500", "bg-emerald-500"][index]}`} /><div><p className="text-[10px] font-semibold leading-tight text-slate-700">{item}</p><p className="mt-0.5 text-[9px] text-slate-400">Hace {index + 1} h</p></div></div>)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-2 hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3.5 shadow-xl sm:flex lg:-left-10">
        <span className="grid size-10 place-items-center rounded-xl bg-emerald-100"><CheckCircle2 className="size-5 text-emerald-600" /></span><div><p className="text-xs font-bold text-slate-900">Asistencia completa</p><p className="text-[10px] text-slate-500">Todos los cursos actualizados</p></div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section id="plataforma" className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbff_0%,#eef6ff_55%,#f6f3ff_100%)] py-16 sm:py-20 lg:py-24">
      <div className="hero-grid absolute inset-0 opacity-50" /><div className="absolute -left-32 top-24 size-80 rounded-full bg-cyan-300/20 blur-3xl" /><div className="absolute -right-40 -top-20 size-[32rem] rounded-full bg-blue-300/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div>
          <h1 className="max-w-2xl text-balance font-title text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[4rem]">Tu escuela conectada en <span className="text-gradient">un solo lugar.</span></h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-slate-600">Centralizá la gestión académica, mejorá la comunicación y acompañá a cada alumno con información clara y actualizada.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-13 rounded-full bg-blue-700 px-7 text-base shadow-[0_12px_28px_-10px_rgba(29,78,216,0.8)] hover:bg-blue-800"><a href="#contacto">Solicitar una demo <ArrowRight /></a></Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">{["Implementación acompañada", "Acceso multidispositivo", "Soporte cercano"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="size-4 text-emerald-600" />{item}</span>)}</div>
        </div>
        <ProductPreview />
      </div>
    </section>
  )
}

const features = [
  { icon: ClipboardCheck, title: "Asistencia simple", text: "Tomá asistencia por curso y consultá historiales individuales en segundos.", color: "bg-blue-100 text-blue-700" },
  { icon: GraduationCap, title: "Notas y boletines", text: "Cargá calificaciones, generá reportes y compartí el progreso académico.", color: "bg-violet-100 text-violet-700" },
  { icon: MessageSquareText, title: "Comunicación centralizada", text: "Conectá a directivos, docentes y familias desde un canal institucional.", color: "bg-cyan-100 text-cyan-700" },
  { icon: CalendarDays, title: "Agenda escolar", text: "Organizá exámenes, entregas, actos y recordatorios por curso.", color: "bg-amber-100 text-amber-700" },
  { icon: FileText, title: "Seguimiento integral", text: "Reuní observaciones, sanciones y documentación en un único perfil.", color: "bg-rose-100 text-rose-700" },
  { icon: BarChart3, title: "Información para decidir", text: "Visualizá indicadores clave y detectá situaciones que necesitan atención.", color: "bg-emerald-100 text-emerald-700" },
]

function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"><div><p className="eyebrow">Todo lo importante</p><h2 className="section-title mt-4">Menos tareas repetitivas. Más tiempo para educar.</h2></div><p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">Alumnix ordena la información cotidiana de tu institución y la convierte en una experiencia clara para toda la comunidad.</p></div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => <article key={feature.title} className="bg-white p-7 transition duration-300 hover:bg-slate-50 sm:p-8"><span className={`grid size-12 place-items-center rounded-2xl ${feature.color}`}><feature.icon className="size-5" /></span><h3 className="mt-8 text-xl font-bold text-slate-950">{feature.title}</h3><p className="mt-3 leading-7 text-slate-600">{feature.text}</p></article>)}
        </div>
      </div>
    </section>
  )
}

function CommunitySection() {
  const roles = [
    { icon: LayoutDashboard, role: "Directivos", text: "Una visión completa para gestionar y tomar decisiones." },
    { icon: BookOpen, role: "Docentes", text: "Herramientas ágiles para el trabajo de todos los días." },
    { icon: UserCheck, role: "Preceptores", text: "Seguimiento claro de asistencia y convivencia." },
    { icon: Users, role: "Familias", text: "Información disponible y comunicación más cercana." },
    { icon: GraduationCap, role: "Alumnos", text: "Acceso a sus notas, asistencia y comunicados en un solo lugar." },
  ]
  return (
    <section id="comunidad" className="overflow-hidden bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div><p className="eyebrow !text-cyan-300">Una comunidad conectada</p><h2 className="section-title mt-4 !text-white">Cada usuario ve exactamente lo que necesita.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Los permisos por rol hacen que la experiencia sea simple, segura y relevante para cada integrante de la institución.</p><Button asChild variant="outline" className="mt-8 h-12 rounded-full border-white/20 bg-white/5 px-6 text-white hover:bg-white hover:text-slate-950"><a href="#contacto">Ver Alumnix en acción <ArrowRight /></a></Button></div>
        <div className="space-y-4"><div className="grid gap-4 sm:grid-cols-3">{roles.slice(0, 3).map((item) => <article key={item.role} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]"><span className="grid size-11 place-items-center rounded-2xl bg-blue-500/15 text-cyan-300"><item.icon className="size-5" /></span><h3 className="mt-6 text-lg font-bold">{item.role}</h3><p className="mt-2 leading-6 text-slate-400">{item.text}</p></article>)}</div><div className="grid gap-4 sm:grid-cols-2 sm:w-2/3 sm:mx-auto">{roles.slice(3).map((item) => <article key={item.role} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]"><span className="grid size-11 place-items-center rounded-2xl bg-blue-500/15 text-cyan-300"><item.icon className="size-5" /></span><h3 className="mt-6 text-lg font-bold">{item.role}</h3><p className="mt-2 leading-6 text-slate-400">{item.text}</p></article>)}</div></div>
      </div></div>
    </section>
  )
}

function SecuritySection() {
  const checks = ["Accesos diferenciados por rol", "Conexiones protegidas", "Registro de actividad", "Respaldo periódico de datos"]
  return (
    <section id="seguridad" className="bg-slate-50 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
      <div className="relative mx-auto grid aspect-square w-full max-w-md place-items-center"><div className="absolute inset-0 rounded-full border border-blue-200" /><div className="absolute inset-[12%] rounded-full border border-dashed border-blue-300" /><div className="absolute inset-[24%] rounded-full bg-blue-100" /><div className="relative grid size-28 place-items-center rounded-[2rem] bg-blue-700 text-white shadow-2xl shadow-blue-300"><ShieldCheck className="size-12" /></div><span className="absolute left-[4%] top-[24%] grid size-12 place-items-center rounded-2xl bg-white text-blue-700 shadow-lg"><LockKeyhole className="size-5" /></span><span className="absolute bottom-[15%] right-[3%] grid size-12 place-items-center rounded-2xl bg-white text-emerald-600 shadow-lg"><Activity className="size-5" /></span></div>
      <div><p className="eyebrow">Seguridad desde el diseño</p><h2 className="section-title mt-4">La información de tu escuela, cuidada todos los días.</h2><p className="mt-6 text-lg leading-8 text-slate-600">El acceso a datos sensibles requiere control y trazabilidad. Alumnix organiza los permisos y protege cada interacción dentro de la plataforma.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{checks.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-100"><Check className="size-4 text-emerald-700" /></span><span className="text-sm font-bold text-slate-700">{item}</span></div>)}</div></div>
    </div></section>
  )
}

function StepsSection() {
  const steps = [["01", "Conocemos tu institución", "Relevamos cómo trabaja tu equipo y qué necesita ordenar."], ["02", "Configuramos Alumnix", "Preparamos cursos, usuarios y permisos para empezar con una base clara."], ["03", "Acompañamos el inicio", "Capacitamos al equipo y damos soporte durante la implementación."]]
  return (
    <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Implementación acompañada</p><h2 className="section-title mt-4">Empezar es más simple de lo que parece.</h2></div><div className="relative mt-14 grid gap-5 lg:grid-cols-3"><div className="absolute left-[16%] right-[16%] top-10 hidden border-t border-dashed border-blue-300 lg:block" />{steps.map(([number, title, text]) => <article key={number} className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.5)]"><span className="grid size-14 place-items-center rounded-2xl bg-blue-700 text-sm font-bold text-white">{number}</span><h3 className="mt-7 text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>
  )
}

function FAQSection() {
  const faqs = [["¿Alumnix funciona en celulares?", "Sí. La plataforma se adapta a celulares, tablets y computadoras para que cada usuario pueda acceder desde el dispositivo que utiliza habitualmente."], ["¿Qué necesita la escuela para usarlo?", "Solo una conexión a internet y un navegador actualizado. El equipo de Alumnix acompaña la configuración inicial y la puesta en marcha."], ["¿Cada persona tiene su propio acceso?", "Sí. Directivos, docentes, preceptores, familias y alumnos ingresan con usuarios individuales y permisos acordes a su rol."]]
  return (
    <section id="faq" className="scroll-mt-18 bg-slate-50 py-20 sm:py-28"><div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><p className="eyebrow">Preguntas frecuentes</p><h2 className="section-title mt-4">Lo que necesitás saber.</h2><p className="mt-5 leading-7 text-slate-600">Si tenés otra consulta, escribinos y te ayudamos.</p></div><Accordion type="single" collapsible className="space-y-3">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`} className="rounded-2xl border border-slate-200 bg-white px-5"><AccordionTrigger className="py-5 text-left font-bold text-slate-900 hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-5 leading-7 text-slate-600">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>
  )
}

function Footer() {
  return <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between"><div className="flex items-center gap-3"><Image src={iconColor} alt="Alumnix" className="size-11 object-contain" /><div><p className="font-bold text-slate-900">Alumnix</p><p className="text-xs text-slate-500">Gestión escolar conectada</p></div></div><nav className="flex flex-wrap gap-x-6 gap-y-3">{navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-500 hover:text-blue-700">{link.label}</a>)}</nav><p className="text-sm text-slate-400">© {new Date().getFullYear()} Alumnix</p></div></footer>
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Alumnix funciona en celulares?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. La plataforma se adapta a celulares, tablets y computadoras para que cada usuario pueda acceder desde el dispositivo que utiliza habitualmente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué necesita la escuela para usarlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Solo una conexión a internet y un navegador actualizado. El equipo de Alumnix acompaña la configuración inicial y la puesta en marcha.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cada persona tiene su propio acceso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Directivos, docentes, preceptores, familias y alumnos ingresan con usuarios individuales y permisos acordes a su rol.",
      },
    },
  ],
}

export default function AlumnixLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Header />
      <main><HeroSection /><FeaturesSection /><CommunitySection /><SecuritySection /><StepsSection /><FAQSection /><ContactSection /></main>
      <Footer />
    </div>
  )
}
