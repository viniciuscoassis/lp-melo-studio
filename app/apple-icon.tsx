import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

function MeloMark({ size: markSize = 86 }: { size?: number }) {
  return (
    <svg width={markSize} height={Math.round(markSize * 1.5)} viewBox="0 0 42 63" fill="none">
      <path
        d="M0 33.8696V42.15L20.4384 62.527L33.3639 50.0878L5.81497 22.5388L5.97654 14.1373L20.2769 28.4376L35.222 14.5427V26.9012L41.1985 32.6369V0L20.5985 20.6L0 0V25.2047L24.8831 50.007L20.6 54.5309L0 33.8696Z"
        fill="#1D1D1D"
      />
      <path d="M27.1899 27.552L41.2 41.4529L37.2026 45.5714L22.8829 31.2651L27.1899 27.552Z" fill="#1D1D1D" />
    </svg>
  );
}

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffef7b",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#f5f5f5",
            borderRadius: 38,
            display: "flex",
            height: 132,
            justifyContent: "center",
            width: 132,
          }}
        >
          <MeloMark />
        </div>
      </div>
    ),
    size,
  );
}
