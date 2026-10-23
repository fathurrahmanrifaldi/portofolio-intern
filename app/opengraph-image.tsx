import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, Fullstack Web Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0a0b14 0%, #161838 60%, #2a2580 100%)",
          color: "#ecedf6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
              color: "white",
            }}
          >
            FR
          </div>
          <div style={{ fontSize: 26, color: "#a5b4fc" }}>Open for internship</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 36, color: "#a5b4fc", marginTop: 12 }}>
            Fullstack Web Developer
          </div>
          <div style={{ fontSize: 26, color: "#9da1b8", marginTop: 28 }}>
            Laravel · PHP · PostgreSQL · Docker
          </div>
        </div>
      </div>
    ),
    size,
  );
}
