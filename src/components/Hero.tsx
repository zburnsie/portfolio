export default function Hero() {
  return (
    <section
      style={{
        background: "#fdf6e3",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot-grid texture */}
      <div
        className="dot-grid"
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Content — side by side */}
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "4rem 2rem 4rem",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Photo ── */}
        <div
          className="pixel-frame"
          style={{ width: 220, height: 220, overflow: "hidden", flexShrink: 0 }}
        >
          <img
            src="/zachary.jpeg"
            alt="Zachary Burnside"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
          />
        </div>

        {/* ── Text ── */}
        <div
          style={{
            flex: "0 1 460px",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {/* Eyebrow */}
          <span
            style={{
              fontFamily: "Press Start 2P, monospace",
              fontSize: "0.6rem",
              color: "#fb923c",
              letterSpacing: "0.1em",
            }}
          >
            DATA ANALYST · DEVELOPER
          </span>

          {/* Name */}
          <h1
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              color: "#3b2a1a",
              letterSpacing: "0.04em",
              lineHeight: 1.15,
            }}
          >
            ZACHARY
            <br />
            BURNSIDE
          </h1>

          {/* Rainbow accent bar */}
          <div className="rainbow-stripe" style={{ width: 160 }} />

          {/* Bio */}
          <p
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "0.78rem",
              color: "#7a5c3e",
              lineHeight: 2,
              maxWidth: "48ch",
            }}
          >
            When I was 8 years old, I remember scribbling Utah Jazz stats on
            sticky notes on my mom's bed. When I got old enough to play, she
            started printing stat sheets to track every one of my basketball
            games.
            <br />
            <br />
            That obsession with data never left, it just grew up. Today I
            channel that same instinct into data analytics: finding the signal
            in the noise, and turning numbers into decisions that actually
            matter.
            <br />
            <br />
            I'm looking for data roles where curiosity, sports, and meaningful
            insights collide.
          </p>

          {/* Tech chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {["Python", "SQL", "React", "Data Viz"].map((tag) => (
              <span key={tag} className="tech-chip">
                {tag}
              </span>
            ))}
          </div>

          {/* Contact buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              paddingTop: "0.25rem",
            }}
          >
            <a href="mailto:zburnside14@gmail.com" className="pixel-btn">
              EMAIL ↗
            </a>
            <a
              href="https://www.linkedin.com/in/zach-burnside/"
              target="_blank"
              rel="noreferrer"
              className="pixel-btn"
              style={{ background: "#bfdbfe" }}
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </div>

      {/* Rainbow stripe divider */}
      <div className="rainbow-stripe" />
    </section>
  );
}
