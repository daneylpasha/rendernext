import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: "linear-gradient(135deg, #1a1a1a 0%, #141414 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
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
      ...size,
    }
  );
}
