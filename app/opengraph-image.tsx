import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "RenderNext - Digital Product Studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141414",
          position: "relative",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "20%",
            width: 400,
            height: 400,
            background:
              "radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#F5A623",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              render
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              next
            </span>
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#F5A623",
                fontFamily: "system-ui, sans-serif",
                marginLeft: 8,
              }}
            >
              {">>"}
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: "rgba(255,255,255,0.7)",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Digital Product Studio
          </div>

          {/* Subtext */}
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.5)",
              fontFamily: "system-ui, sans-serif",
              marginTop: 16,
            }}
          >
            Mobile Apps • Web Applications • AI Solutions
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #F5A623, #FF8C00, #F5A623)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
