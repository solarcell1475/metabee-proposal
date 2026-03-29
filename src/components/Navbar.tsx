import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'policy', label: 'Why Now' },
  { id: 'business', label: 'Business Logic' },
  { id: 'hsitp', label: 'HSITP' },
  { id: 'stakeholders', label: 'Stakeholders' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'market', label: 'Market' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'risks', label: 'Risks' },
  { id: 'budget', label: 'Budget' },
  { id: 'execution', label: 'Execution' },
];

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 },
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="nav__inner">
          <a className="nav__logo" href="#hero" onClick={() => setMobileOpen(false)}>
            <svg viewBox="0 0 36 36" fill="none" aria-label="MetaBee logo">
              <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
              <text x="18" y="23" textAnchor="middle" fontSize="16" fill="currentColor" fontFamily="var(--font-display)">M</text>
            </svg>
            <span>Meta<strong style={{ color: 'var(--color-primary)' }}>Bee</strong></span>
          </a>

          <ul className="nav__links">
            {sections.slice(1).map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={activeSection === s.id ? 'active' : ''}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__right">
            <button className="btn-theme" onClick={onToggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              className="nav__hamburger"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>
      <div className={`nav__mobile ${mobileOpen ? 'open' : ''}`}>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={() => setMobileOpen(false)}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
