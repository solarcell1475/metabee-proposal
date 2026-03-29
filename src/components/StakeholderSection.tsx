import { useState } from 'react';
import {
  stakeholders,
  categoryLabels,
  type StakeholderCategory,
} from '../data/stakeholders';
import { useFadeIn } from '../hooks/useFadeIn';

const allCategories: Array<StakeholderCategory | 'all'> = [
  'all',
  'academic',
  'clinical',
  'commercial',
  'government',
  'community',
];

export default function StakeholderSection() {
  const [filter, setFilter] = useState<StakeholderCategory | 'all'>('all');

  useFadeIn([filter]);

  const filtered =
    filter === 'all'
      ? stakeholders
      : stakeholders.filter((s) => s.category === filter);

  return (
    <section id="stakeholders" className="section section--alt">
      <div className="container--wide">
        <p className="section-label">People</p>
        <h2 className="section-title">Six <em>Stakeholder</em> Roles</h2>
        <p className="section-lead">
          Each stakeholder plays a distinct role in the value chain — from
          technology origin to commercial exit.
        </p>

        <div className="filter-bar">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All' : categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="stakeholder-grid">
          {filtered.map((s) => (
            <div className="sc fade-in" key={s.id}>
              <div className="sc__header">
                <div className={`sc__avatar sc__avatar--${s.colorClass}`}>
                  {s.emoji}
                </div>
                <div>
                  <div className="sc__name">{s.name}</div>
                  <div className="sc__title">{s.title}</div>
                </div>
              </div>
              <div className="sc__body">
                <div className="sc__row">
                  <span className="sc__row-label">Role</span>
                  <span className="sc__row-val">{s.role}</span>
                </div>
                <div className="sc__row">
                  <span className="sc__row-label">Focus</span>
                  <div className="sc__row-val">
                    <ul>
                      {s.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sc__row">
                  <span className="sc__row-label">Budget</span>
                  <div className="sc__row-val">
                    {s.budgetIn.map((b, i) => (
                      <span className="budget-pill budget-pill--in" key={i} style={{ marginRight: 'var(--space-2)', marginBottom: 'var(--space-1)', display: 'inline-block' }}>
                        + {b}
                      </span>
                    ))}
                    {s.budgetOut.map((b, i) => (
                      <span className="budget-pill budget-pill--out" key={i} style={{ marginRight: 'var(--space-2)', marginBottom: 'var(--space-1)', display: 'inline-block' }}>
                        − {b}
                      </span>
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
