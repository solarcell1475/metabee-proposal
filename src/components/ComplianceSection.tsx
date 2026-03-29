import { jurisdictions, transferStack, deidentStandard } from '../data/compliance';

export default function ComplianceSection() {
  return (
    <section id="compliance" className="section">
      <div className="container--wide">
        <p className="section-label">Regulatory</p>
        <h2 className="section-title">Compliance <em>Architecture</em></h2>
        <p className="section-lead">
          Multi-jurisdictional regulatory compliance across Mainland China, Hong
          Kong, Macau, and international buyers.
        </p>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          Applicable Laws
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Jurisdiction</th>
                <th>Law</th>
                <th>Key Obligation</th>
              </tr>
            </thead>
            <tbody>
              {jurisdictions.map((j) => (
                <tr key={j.abbreviation}>
                  <td style={{ fontWeight: 600 }}>{j.jurisdiction}</td>
                  <td>
                    {j.law}{' '}
                    <span className="tag tag--amber">{j.abbreviation}</span>
                  </td>
                  <td>{j.obligation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)' }}>
          Cross-Border Transfer Stack
        </h3>
        <div className="transfer-stack">
          {transferStack.map((s) => (
            <div className="transfer-step fade-in" key={s.step}>
              <div className="transfer-step__num">{s.step}</div>
              <div>
                <p className="transfer-step__location">{s.location}</p>
                <p className="transfer-step__action">{s.action}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)' }}>
          De-identification Standard
        </h3>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          {deidentStandard.map((d, i) => (
            <li key={i} style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
