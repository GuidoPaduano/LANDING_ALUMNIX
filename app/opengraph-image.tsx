import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Alumnix — Gestión escolar integral para Argentina"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a6e 60%, #1d4ed8 100%)",
          position: "relative",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(99,179,255,0.12)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: 200,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(99,179,255,0.08)",
            display: "flex",
          }}
        />

        {/* Pill badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#93c5fd", fontSize: 18, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            SOFTWARE ESCOLAR
          </span>
        </div>

        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div
            style={{
              width: 60,
              height: 60,
              background: "#2563eb",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid rgba(255,255,255,0.25)",
            }}
          >
            <span style={{ color: "white", fontSize: 28, fontWeight: 900 }}>A</span>
          </div>
          <span style={{ color: "white", fontSize: 52, fontWeight: 800, letterSpacing: "-0.03em" }}>
            Alumnix
          </span>
        </div>

        {/* Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span style={{ color: "white", fontSize: 40, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            Tu escuela conectada
          </span>
          <span style={{ color: "#93c5fd", fontSize: 40, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            en un solo lugar.
          </span>
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
          {["Notas y boletines", "Asistencia", "Mensajería", "Calendario"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 100,
                padding: "10px 22px",
              }}
            >
              <span style={{ color: "#e2e8f0", fontSize: 18, fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
