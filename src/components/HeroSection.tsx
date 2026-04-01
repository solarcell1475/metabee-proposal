import { vision } from '../data/vision';
import { vision_zh } from '../data/vision';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

export default function HeroSection() {
  const lang = useLang();
  const v = lang === 'zh' ? vision_zh : vision;

  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">{v.codename} &middot; v{v.version}</p>
        <h1 className="hero__title">
          {t('hero.title.1', lang)}<em>{t('hero.title.2', lang)}</em>{t('hero.title.3', lang)}
        </h1>
        <p className="hero__subtitle">{v.oneLiner}</p>
        <div className="hero__stats">
          {v.heroStats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-val">{s.value}</span>
              <span className="hero__stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
