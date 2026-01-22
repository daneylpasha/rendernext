import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog-data";

export const runtime = "edge";

export const alt = "RenderNext Blog";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title || "Blog Post";
  const category = post?.category || "Article";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#141414",
          position: "relative",
          padding: 50,
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gradient orb */}
        <div
          style={{
            position: "absolute",
            bottom: "-25%",
            right: "-10%",
            width: 450,
            height: 450,
            background:
              "radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Top bar with logo and category */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#F5A623",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              render
            </span>
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#ffffff",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              next
            </span>
            <span
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: "#F5A623",
                fontFamily: "system-ui, sans-serif",
                marginLeft: 4,
              }}
            >
              {">>"}
            </span>
          </div>

          {/* Category badge */}
          <div
            style={{
              backgroundColor: "rgba(245,166,35,0.15)",
              color: "#F5A623",
              padding: "6px 16px",
              borderRadius: 16,
              fontSize: 14,
              fontWeight: 600,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: title.length > 60 ? 42 : 48,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "system-ui, sans-serif",
              lineHeight: 1.2,
              maxWidth: "90%",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            rendernext.io/blog
          </div>
          <div
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.5)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {post?.readTime || "5 min read"}
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
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
