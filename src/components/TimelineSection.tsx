import { useState } from 'react';
import { milestones, milestones_zh } from '../data/timeline';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

export default function TimelineSection() {
  const lang = useLang();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true });
  const data = lang === 'zh' ? milestones_zh : milestones;

  const toggle = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="timeline" className="section">
      <div className="container">
        <p className="section-label">{t('time.label', lang)}</p>
        <h2 className="section-title">{t('time.title.1', lang)}<em>{t('time.title.2', lang)}</em></h2>
        <p className="section-lead">{t('time.lead', lang)}</p>

        <div className="timeline">
          {data.map((m, i) => (
            <div className="timeline-item fade-in" key={i}>
              <div className={`timeline-dot ${m.status === 'current' ? 'timeline-dot--active' : ''}`} />
              <p className="timeline-period">{m.period}</p>
              <p className="timeline-title">{m.title}</p>
              <div className="timeline-chips">
                {m.chips.map((c, j) => (<span className="chip" key={j}>{c}</span>))}
              </div>
              <button className="timeline-item__toggle" onClick={() => toggle(i)}>
                {expanded[i] ? t('time.hide', lang) : t('time.show', lang)}
              </button>
              <div className={`timeline-item__body ${expanded[i] ? 'timeline-item__body--expanded' : 'timeline-item__body--collapsed'}`}>
                <ul className="timeline-details" style={{ marginTop: 'var(--space-2)' }}>
                  {m.details.map((d, j) => (<li key={j}>{d}</li>))}
                </ul>
                {m.budget && <p className="timeline-budget">{m.budget}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
