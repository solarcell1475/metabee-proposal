import { hsitpPrivileges, hsitpPrivileges_zh, hsitpPrivileges_zh_public } from '../data/hsitp';
import { useLang, isChineseLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

export default function HSITPSection() {
  const lang = useLang();
  const data = lang === 'zh-public' ? hsitpPrivileges_zh_public : isChineseLang(lang) ? hsitpPrivileges_zh : hsitpPrivileges;

  return (
    <section id="hsitp" className="section">
      <div className="container--wide">
        <p className="section-label">{t('hsitp.label', lang)}</p>
        <h2 className="section-title">{t('hsitp.title.1', lang)} <em>{t('hsitp.title.2', lang)}</em></h2>
        <p className="section-lead">{t('hsitp.lead', lang)}</p>
        <div className="card-grid">
          {data.map((p) => (
            <div className="card fade-in" key={p.id}>
              <div className={`card__icon card__icon--${p.colorClass}`}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.detail}</p>
              <p className="card__value">{p.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
