import { useState } from 'react';
import { milestones } from '../data/timeline';

export default function TimelineSection() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (idx: number) => {
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="timeline" className="section">
      <div className="container">
        <p className="section-label">Roadmap</p>
        <h2 className="section-title">Milestone Timeline <em>2026–2030</em></h2>
        <p className="section-lead">
          From foundation to first revenue to GBA-scale platform — a phased
          approach with clear gates and KPIs.
        </p>

        <div className="timeline">
          {milestones.map((m, i) => (
            <div className="timeline-item fade-in" key={i}>
              <div
                className={`timeline-dot ${m.status === 'current' ? 'timeline-dot--active' : ''}`}
              />
              <p className="timeline-period">{m.period}</p>
              <p className="timeline-title">{m.title}</p>

              <div className="timeline-chips">
                {m.chips.map((c, j) => (
                  <span className="chip" key={j}>{c}</span>
                ))}
              </div>

              <button
                className="timeline-item__toggle"
                onClick={() => toggle(i)}
              >
                {expanded[i] ? '▾ Hide details' : '▸ Show details'}
              </button>

              <div
                className={`timeline-item__body ${expanded[i] ? 'timeline-item__body--expanded' : 'timeline-item__body--collapsed'}`}
              >
                <ul className="timeline-details" style={{ marginTop: 'var(--space-2)' }}>
                  {m.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
                {m.budget && (
                  <p className="timeline-budget">{m.budget}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
