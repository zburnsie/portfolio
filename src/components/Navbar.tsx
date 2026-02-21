interface Props {
  onProjectsClick: () => void
}

export default function Navbar({ onProjectsClick }: Props) {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: '#fdf6e3',
        borderBottom: 'none',
      }}
    >
      <div style={{
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
        }}>
        {/* Logo / name */}
        <span
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900,
            fontSize: '1rem',
            color: '#3b2a1a',
            letterSpacing: '0.06em',
          }}
        >
          ZB
        </span>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a
            href="#about"
            style={{
              fontFamily: 'Press Start 2P, monospace',
              fontSize: '0.6rem',
              color: '#7a5c3e',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              lineHeight: 1,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f43f5e')}
            onMouseLeave={e => (e.currentTarget.style.color = '#7a5c3e')}
          >
            ABOUT
          </a>
          <button
            onClick={onProjectsClick}
            style={{
              fontFamily: 'Press Start 2P, monospace',
              fontSize: '0.6rem',
              color: '#7a5c3e',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.06em',
              lineHeight: 1,
              padding: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f43f5e')}
            onMouseLeave={e => (e.currentTarget.style.color = '#7a5c3e')}
          >
            PROJECTS
          </button>
          <a
            href="https://github.com/zburnsie?tab=repositories"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'Press Start 2P, monospace',
              fontSize: '0.6rem',
              color: '#7a5c3e',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              lineHeight: 1,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#f43f5e')}
            onMouseLeave={e => (e.currentTarget.style.color = '#7a5c3e')}
          >
            GITHUB ↗
          </a>
          <a
            href="/Zachary_Burnside_Resume_PDF.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'Press Start 2P, monospace',
              fontSize: '0.6rem',
              color: '#fdf6e3',
              background: '#3b2a1a',
              textDecoration: 'none',
              letterSpacing: '0.06em',
              lineHeight: 1,
              padding: '0.45rem 0.75rem',
              border: '2px solid #3b2a1a',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#fb923c'; e.currentTarget.style.borderColor = '#fb923c' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#3b2a1a'; e.currentTarget.style.borderColor = '#3b2a1a' }}
          >
            RESUME ↗
          </a>
        </div>
      </div>
      {/* Rainbow stripe under nav */}
      <div className="rainbow-stripe" />
    </nav>
  )
}
