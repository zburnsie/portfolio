type Tab = 'Candid' | 'Blushing Blossoms' | 'CineNiche' | 'Basketball Stats'

interface ProjectData {
  emoji: string
  image?: string
  imagePosition?: string
  imageScale?: number
  imageFit?: 'cover' | 'contain'
  type: string
  accentBg: string
  accentBorder: string
  tech: string[]
  description: string
  github?: string
  live?: string
}

interface Props {
  tabs: readonly Tab[]
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

const projects: Record<Tab, ProjectData> = {
  'Candid': {
    emoji: '📸',
    image: '/Candid.png',
    type: 'AI · HR PLATFORM',
    accentBg: '#fde68a',
    accentBorder: '#fb923c',
    tech: ['React', 'Python', 'PostgreSQL', 'scikit-learn', 'Claude'],
    description: 'An HR platform that matches employees to open roles using a machine learning pipeline that scores skill-to-job fit and improves over time by learning from real hiring outcomes. Resume parsing auto-extracts and rates skills into structured fields. LLM-generated explanations tell admins in plain English why a candidate was recommended, and AI-driven upskilling plans come with printable PDF roadmaps so employees know exactly what to work on. All backed by a normalized relational database built from scratch.',
    github: 'https://github.com/tatematley/AISComp',
  },
  'Blushing Blossoms': {
    emoji: '🌸',
    image: '/blushingBlossoms.png',
    type: 'FLORAL BUSINESS SITE',
    accentBg: '#f9a8d4',
    accentBorder: '#f43f5e',
    tech: ['React', 'ASP.NET', 'C#'],
    description: 'A professional website built for my wife\'s floral business. Features a photo gallery to showcase arrangements and an inquiry form that delivers client requests directly to her business email. Built with a React frontend and an ASP.NET backend to handle form submissions and email delivery.',
    github: 'https://github.com/zburnsie/blushing-blossoms',
  },
  'CineNiche': {
    emoji: '🎬',
    type: 'ML · FILM PLATFORM',
    accentBg: '#7dd3fc',
    accentBorder: '#0ea5e9',
    tech: ['React', 'TypeScript', 'Python', 'scikit-learn'],
    description: 'A movie streaming platform powered by three machine learning recommenders: a content-based model that suggests films similar to ones you\'ve clicked on, a collaborative filtering model that finds movies loved by users with similar taste, and a popularity-based model for trending picks. Recommendations update dynamically based on your browsing behavior.',
    github: 'https://github.com/zburnsie/Intex_Winter',
  },
  'Basketball Stats': {
    emoji: '🏀',
    type: 'STATS DASHBOARD',
    accentBg: '#fb923c',
    accentBorder: '#ea580c',
    tech: ['React', 'D3.js', 'REST API'],
    description: 'Description coming soon — drop your write-up here.',
  },
}

export default function ProjectTabs({ tabs, activeTab, onTabChange }: Props) {
  const project = projects[activeTab]

  return (
    <section style={{ background: '#f0e0c0', minHeight: '60vh', paddingBottom: '5rem' }}>

      {/* Rainbow stripe top */}
      <div className="rainbow-stripe" />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '2.5rem 2rem' }}>

        {/* Section label */}
        <p style={{
          fontFamily: 'Press Start 2P, monospace',
          fontSize: '0.5rem',
          color: '#7a5c3e',
          letterSpacing: '0.1em',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          ✦ PROJECTS ✦
        </p>

        {/* Tab bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          borderBottom: '2px solid #3b2a1a',
        }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project panel */}
        <div key={activeTab} style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

          {/* Screenshot */}
          <div className="pixel-card" style={{
            background: project.accentBg,
            width: '100%',
            aspectRatio: '5 / 2',
            position: 'relative',
            overflow: 'hidden',
            display: project.image ? 'block' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: project.image ? 0 : undefined,
          }}>
            {project.image ? (
              <img
                src={project.image}
                alt={activeTab}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: project.imageFit ?? 'cover', objectPosition: project.imagePosition ?? 'top center' }}
              />
            ) : (
              <span style={{ fontSize: '4rem' }}>{project.emoji}</span>
            )}
          </div>

          {/* Info card */}
          <div className="pixel-card" style={{
            padding: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            borderTop: `5px solid ${project.accentBorder}`,
          }}>

            {/* Left: title + description */}
            <div style={{ flex: '2 1 300px', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <p style={{
                fontFamily: 'Press Start 2P, monospace',
                fontSize: '0.45rem',
                color: project.accentBorder,
                letterSpacing: '0.08em',
              }}>
                {project.type}
              </p>

              <h2 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                color: '#3b2a1a',
                letterSpacing: '0.03em',
              }}>
                {activeTab}
              </h2>

              <p style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '0.78rem',
                color: '#7a5c3e',
                lineHeight: 1.85,
              }}>
                {project.description}
              </p>
            </div>

            {/* Right: tech chips + buttons */}
            <div style={{ flex: '1 1 180px', display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map((t) => (
                  <span key={t} className="tech-chip" style={{ background: project.accentBg }}>{t}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="pixel-btn">GITHUB ↗</a>}
                {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="pixel-btn" style={{ background: project.accentBg }}>LIVE ↗</a>}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
