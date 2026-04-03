import { policyWindows, policyWindows_zh } from '../data/policyWindows';
import { useLang, isChineseLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

export default function PolicySection() {
  const lang = useLang();
  const data = isChineseLang(lang) ? policyWindows_zh : policyWindows;

  return (
    <section id="policy" className="section">
      <div className="container--wide">
        <p className="section-label">{t('policy.label', lang)}</p>
        <h2 className="section-title">{t('policy.title.1', lang)}<em>{t('policy.title.2', lang)}</em></h2>
        <p className="section-lead">{t('policy.lead', lang)}</p>
        <div className="card-grid">
          {data.map((w) => (
            <div className="card fade-in" key={w.id}>
              <div className="card__icon card__icon--green">{w.icon}</div>
              <h3>{w.title}</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gold)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                {w.period}
              </p>
              <p>{w.description}</p>
              <p style={{ marginTop: 'var(--space-3)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                {t('policy.impact', lang)}: {w.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
