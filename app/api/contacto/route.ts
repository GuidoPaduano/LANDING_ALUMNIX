import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(req: NextRequest) {
  const DJANGO_URL = (process.env.DJANGO_URL ?? "").replace(/\/$/, "")
  if (!DJANGO_URL) {
    return NextResponse.json({ detail: "Servicio no configurado." }, { status: 503 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ detail: "JSON inválido." }, { status: 400 })
  }

  try {
    const upstream = await fetch(`${DJANGO_URL}/api/contacto/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
    const data = await upstream.json().catch(() => ({}))
    return NextResponse.json(data, { status: upstream.status })
  } catch {
    return NextResponse.json({ detail: "Error de conexión con el servidor." }, { status: 502 })
  }
}
