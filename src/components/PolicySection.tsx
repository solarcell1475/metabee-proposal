import { policyWindows } from '../data/policyWindows';

export default function PolicySection() {
  return (
    <section id="policy" className="section">
      <div className="container--wide">
        <p className="section-label">Why Now</p>
        <h2 className="section-title">Three <em>Policy Windows</em></h2>
        <p className="section-lead">
          A rare convergence of regulatory changes makes this the optimal moment
          to build a cross-border health data business in the Greater Bay Area.
        </p>
        <div className="card-grid">
          {policyWindows.map((w) => (
            <div className="card fade-in" key={w.id}>
              <div className="card__icon card__icon--green">{w.icon}</div>
              <h3>{w.title}</h3>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gold)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                {w.period}
              </p>
              <p>{w.description}</p>
              <p style={{ marginTop: 'var(--space-3)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                Impact: {w.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
