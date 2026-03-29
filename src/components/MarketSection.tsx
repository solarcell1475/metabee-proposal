import { marketStats, buyerSegments, competitiveEdge } from '../data/market';

function priorityTag(priority: string) {
  const cls = priority === 'high' ? 'tag--green' : priority === 'medium' ? 'tag--amber' : 'tag--red';
  return <span className={`tag ${cls}`}>{priority.toUpperCase()}</span>;
}

export default function MarketSection() {
  return (
    <section id="market" className="section section--alt">
      <div className="container--wide">
        <p className="section-label">Opportunity</p>
        <h2 className="section-title">Market Analysis & <em>Commercial Targets</em></h2>
        <p className="section-lead">
          The global RWE market is {marketStats.marketSize} (2025), growing at{' '}
          {marketStats.cagr} CAGR {marketStats.cagrPeriod}. Asian population
          datasets command the highest premium due to the genetic diversity gap.
        </p>

        <div className="card-grid" style={{ marginBottom: 'var(--space-10)' }}>
          <div className="card">
            <h3>{marketStats.marketSize}</h3>
            <p>Global RWE Market (2025)</p>
          </div>
          <div className="card">
            <h3>{marketStats.cagr}</h3>
            <p>CAGR through 2030</p>
          </div>
          <div className="card">
            <h3>{marketStats.cohortValue}</h3>
            <p>Per licensing deal (3,000-patient Asian cohort)</p>
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          Target Buyer Segments
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Segment</th>
                <th>Examples</th>
                <th>Use Case</th>
                <th>Price Point</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {buyerSegments.map((b) => (
                <tr key={b.segment}>
                  <td style={{ fontWeight: 600 }}>{b.segment}</td>
                  <td>{b.examples}</td>
                  <td>{b.useCase}</td>
                  <td style={{ fontWeight: 600 }}>{b.pricePoint}</td>
                  <td>{priorityTag(b.priority)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 'var(--space-10)' }}>
          <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
            Competitive Positioning
          </h3>
          <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
            {competitiveEdge.map((c, i) => (
              <li key={i} style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)', color: i === 0 || i === 3 ? 'var(--color-text)' : 'var(--color-text-muted)', fontWeight: i === 0 || i === 3 ? 600 : 400 }}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
