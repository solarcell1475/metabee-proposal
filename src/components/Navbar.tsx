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

function nextLang(current: Lang): Lang {
  if (current === 'en') return 'zh';
  if (current === 'zh') return 'zh-public';
  return 'en';
}

function langButtonLabel(lang: Lang): string {
  if (lang === 'en') return '中文';
  if (lang === 'zh') return '公开';
  return 'EN';
}

function langButtonTitle(lang: Lang): string {
  if (lang === 'en') return '切换到中文完整版';
  if (lang === 'zh') return '切换到 SC-public-v2（不含具体人名）';
  return 'Switch to English';
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

  const cycleLang = () => setLang(nextLang(lang));

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
            {lang === 'zh-public' && (
              <span className="nav__badge" title="SC-public-v2">SC-public-v2</span>
            )}
            <button
              className="btn-lang"
              onClick={cycleLang}
              aria-label="Switch language variant"
              title={langButtonTitle(lang)}
            >
              {langButtonLabel(lang)}
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
