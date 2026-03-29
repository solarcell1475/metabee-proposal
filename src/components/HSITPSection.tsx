import { hsitpPrivileges } from '../data/hsitp';

export default function HSITPSection() {
  return (
    <section id="hsitp" className="section">
      <div className="container--wide">
        <p className="section-label">Unfair Advantage</p>
        <h2 className="section-title">HSITP <em>Privileges</em></h2>
        <p className="section-lead">
          MetaBee.com (HK), as an HSITP-resident startup, holds privileges
          unavailable to ordinary companies.
        </p>
        <div className="card-grid">
          {hsitpPrivileges.map((p) => (
            <div className="card fade-in" key={p.id}>
              <div className={`card__icon card__icon--${p.colorClass}`}>
                {p.icon}
              </div>
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
