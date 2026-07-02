import { ImageResponse } from "next/og";

export const alt = "Melo Studio Design - Studio de design para elevar sua marca";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function MeloMark() {
  return (
    <svg width="92" height="138" viewBox="0 0 42 63" fill="none">
      <path
        d="M0 33.8696V42.15L20.4384 62.527L33.3639 50.0878L5.81497 22.5388L5.97654 14.1373L20.2769 28.4376L35.222 14.5427V26.9012L41.1985 32.6369V0L20.5985 20.6L0 0V25.2047L24.8831 50.007L20.6 54.5309L0 33.8696Z"
        fill="#1D1D1D"
      />
      <path d="M27.1899 27.552L41.2 41.4529L37.2026 45.5714L22.8829 31.2651L27.1899 27.552Z" fill="#1D1D1D" />
    </svg>
  );
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f5f5f2",
          color: "#181818",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#ffef7b",
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            width: 420,
          }}
        />
        <div
          style={{
            border: "24px solid #a6f2cf",
            borderRadius: 999,
            height: 210,
            left: 78,
            opacity: 0.7,
            position: "absolute",
            top: 76,
            width: 210,
          }}
        />
        <div
          style={{
            background: "#f48173",
            bottom: 72,
            height: 32,
            position: "absolute",
            right: 132,
            transform: "rotate(-11deg)",
            width: 220,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "68px 76px",
            position: "relative",
            width: 780,
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 22,
              marginBottom: 52,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#ffef7b",
                borderRadius: 18,
                display: "flex",
                height: 112,
                justifyContent: "center",
                transform: "rotate(-6deg)",
                width: 112,
              }}
            >
              <div style={{ display: "flex", transform: "rotate(6deg)" }}>
                <MeloMark />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 32, fontWeight: 900, lineHeight: 1 }}>
              <span>Melo</span>
              <span style={{ color: "#72726c", fontSize: 22, fontWeight: 700 }}>Studio Design</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              fontWeight: 900,
              letterSpacing: 0,
              lineHeight: 0.92,
            }}
          >
            <span>Design para</span>
            <span>elevar sua marca</span>
          </div>
          <p
            style={{
              color: "#2b2b2b",
              fontSize: 32,
              lineHeight: 1.2,
              marginTop: 34,
              maxWidth: 720,
            }}
          >
            Identidade visual, sites, impressos e social media com um visual funcional e elegante.
          </p>
        </div>
      </div>
    ),
    size,
  );
}
