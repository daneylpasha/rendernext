import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RenderNext",
    short_name: "RenderNext",
    description:
      "Digital Product Studio - Mobile Apps, Web Apps, AI Solutions",
    start_url: "/",
    display: "standalone",
    background_color: "#141414",
    theme_color: "#F5A623",
    icons: [
      {
        src: "/icon-192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
