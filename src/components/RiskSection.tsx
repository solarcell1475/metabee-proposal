import { useState } from 'react';
import { risks } from '../data/risks';
import { useFadeIn } from '../hooks/useFadeIn';

function badgeColor(level: string): string {
  if (level === 'Critical') return 'var(--color-accent)';
  if (level === 'High') return 'var(--color-orange)';
  return 'var(--color-gold)';
}

function bgColor(level: string): string {
  if (level === 'Critical') return 'var(--color-accent-light)';
  if (level === 'High') return 'color-mix(in oklch, var(--color-orange) 12%, var(--color-surface))';
  return 'var(--color-gold-light)';
}

type FilterLevel = 'all' | 'High' | 'Medium' | 'Low';

export default function RiskSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterLevel, setFilterLevel] = useState<FilterLevel>('all');

  useFadeIn([filterLevel]);

  const filtered = filterLevel === 'all'
    ? risks
    : risks.filter((r) => r.probability === filterLevel || r.impact === filterLevel);

  return (
    <section id="risks" className="section section--alt">
      <div className="container--wide">
        <p className="section-label">Risk Management</p>
        <h2 className="section-title">Risk <em>Matrix</em></h2>
        <p className="section-lead">
          10 identified risks with probability, impact, and mitigation strategies.
        </p>

        <div className="filter-bar">
          {(['all', 'High', 'Medium', 'Low'] as FilterLevel[]).map((level) => (
            <button
              key={level}
              className={`filter-btn ${filterLevel === level ? 'active' : ''}`}
              onClick={() => setFilterLevel(level)}
            >
              {level === 'all' ? 'All Levels' : level}
            </button>
          ))}
        </div>

        <div className="risk-grid">
          {filtered.map((r) => (
            <div
              className={`risk-row fade-in ${expandedId === r.id ? 'expanded' : ''}`}
              key={r.id}
              onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <div className="risk-name">{r.id}: {r.name}</div>
                <div className="risk-desc">{r.description}</div>
              </div>
              <span
                className="risk-badge"
                style={{ background: bgColor(r.probability), color: badgeColor(r.probability) }}
              >
                P: {r.probability}
              </span>
              <span
                className="risk-badge"
                style={{ background: bgColor(r.impact), color: badgeColor(r.impact) }}
              >
                I: {r.impact}
              </span>
              <div className="risk-mitigation">
                <strong>Mitigation:</strong> {r.mitigation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
