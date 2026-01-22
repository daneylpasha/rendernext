import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 256,
          background: "linear-gradient(135deg, #1a1a1a 0%, #141414 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#F5A623",
              fontWeight: 700,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            R
          </span>
          <span
            style={{
              color: "#ffffff",
              fontWeight: 700,
              fontFamily: "system-ui, sans-serif",
              letterSpacing: "-0.05em",
            }}
          >
            N
          </span>
        </div>
      </div>
    ),
    {
      width: 512,
      height: 512,
    }
  );
}
