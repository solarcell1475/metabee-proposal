import { useEffect, useState } from 'react';
import { useLang, useLanguageCtx, type Lang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

const sectionIds = ['hero', 'policy', 'business', 'hsitp', 'stakeholders', 'timeline', 'market', 'compliance', 'risks', 'budget', 'execution'] as const;

const navKeys: Record<string, string> = {
  hero: 'nav.home',
  policy: 'nav.whyNow',
  business: 'nav.businessLogic',
  hsitp: 'nav.hsitp',
  stakeholders: 'nav.stakeholders',
  timeline: 'nav.timeline',
  market: 'nav.market',
  compliance: 'nav.compliance',
  risks: 'nav.risks',
  budget: 'nav.budget',
  execution: 'nav.execution',
};

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const lang = useLang();
  const { setLang } = useLanguageCtx();
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

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const toggleLang = () => setLang((lang === 'en' ? 'zh' : 'en') as Lang);

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
            {sectionIds.slice(1).map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={activeSection === id ? 'active' : ''}>
                  {t(navKeys[id] as any, lang)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__right">
            <button
              className="btn-lang"
              onClick={toggleLang}
              aria-label="Switch language"
              title={lang === 'en' ? '切换到中文' : 'Switch to English'}
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
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
          {sectionIds.map((id) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setMobileOpen(false)}>
                {t(navKeys[id] as any, lang)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
