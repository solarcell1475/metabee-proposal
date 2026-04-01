import { useState } from 'react';
import {
  stakeholders, stakeholders_zh,
  categoryLabels, categoryLabels_zh,
  type StakeholderCategory,
} from '../data/stakeholders';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';
import { useFadeIn } from '../hooks/useFadeIn';

const allCategories: Array<StakeholderCategory | 'all'> = [
  'all', 'academic', 'clinical', 'commercial', 'government', 'community',
];

export default function StakeholderSection() {
  const lang = useLang();
  const [filter, setFilter] = useState<StakeholderCategory | 'all'>('all');

  useFadeIn([filter, lang]);

  const data = lang === 'zh' ? stakeholders_zh : stakeholders;
  const labels = lang === 'zh' ? categoryLabels_zh : categoryLabels;
  const filtered = filter === 'all' ? data : data.filter((s) => s.category === filter);

  return (
    <section id="stakeholders" className="section section--alt">
      <div className="container--wide">
        <p className="section-label">{t('stake.label', lang)}</p>
        <h2 className="section-title">{t('stake.title.1', lang)}<em>{t('stake.title.2', lang)}</em>{t('stake.title.3', lang)}</h2>
        <p className="section-lead">{t('stake.lead', lang)}</p>

        <div className="filter-bar">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? t('stake.all', lang) : labels[cat]}
            </button>
          ))}
        </div>

        <div className="stakeholder-grid">
          {filtered.map((s) => (
            <div className="sc fade-in" key={s.id}>
              <div className="sc__header">
                <div className={`sc__avatar sc__avatar--${s.colorClass}`}>{s.emoji}</div>
                <div>
                  <div className="sc__name">{s.name}</div>
                  <div className="sc__title">{s.title}</div>
                </div>
              </div>
              <div className="sc__body">
                <div className="sc__row">
                  <span className="sc__row-label">{t('stake.role', lang)}</span>
                  <span className="sc__row-val">{s.role}</span>
                </div>
                <div className="sc__row">
                  <span className="sc__row-label">{t('stake.focus', lang)}</span>
                  <div className="sc__row-val">
                    <ul>
                      {s.responsibilities.map((r, i) => (<li key={i}>{r}</li>))}
                    </ul>
                  </div>
                </div>
                <div className="sc__row">
                  <span className="sc__row-label">{t('stake.budget', lang)}</span>
                  <div className="sc__row-val">
                    {s.budgetIn.map((b, i) => (
                      <span className="budget-pill budget-pill--in" key={i} style={{ marginRight: 'var(--space-2)', marginBottom: 'var(--space-1)', display: 'inline-block' }}>+ {b}</span>
                    ))}
                    {s.budgetOut.map((b, i) => (
                      <span className="budget-pill budget-pill--out" key={i} style={{ marginRight: 'var(--space-2)', marginBottom: 'var(--space-1)', display: 'inline-block' }}>− {b}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
