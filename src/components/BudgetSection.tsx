import {
  fundingSources,
  totalFunding,
  expenditure,
  totalExpenditure,
  netPosition,
} from '../data/budget';

function probTag(p: string) {
  const cls = p === 'HIGH' ? 'tag--green' : p.startsWith('MEDIUM-') ? 'tag--amber' : 'tag--amber';
  return <span className={`tag ${cls}`}>{p}</span>;
}

export default function BudgetSection() {
  return (
    <section id="budget" className="section">
      <div className="container--wide">
        <p className="section-label">Financials</p>
        <h2 className="section-title">3-Year <em>Budget Overview</em></h2>
        <p className="section-lead">
          Total projected funding of {totalFunding} against {totalExpenditure}{' '}
          expenditure, yielding a net position of {netPosition}.
        </p>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          Funding Sources
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Amount</th>
                <th>Timeline</th>
                <th>Probability</th>
              </tr>
            </thead>
            <tbody>
              {fundingSources.map((f) => (
                <tr key={f.source}>
                  <td style={{ fontWeight: 600 }}>{f.source}</td>
                  <td>{f.amount}</td>
                  <td>{f.timeline}</td>
                  <td>{probTag(f.probability)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total 3-Year Funding</td>
                <td colSpan={3}>{totalFunding}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)' }}>
          Expenditure Breakdown
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Year 1</th>
                <th>Year 2</th>
                <th>Year 3</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {expenditure.map((e) => (
                <tr key={e.category}>
                  <td style={{ fontWeight: 600 }}>{e.category}</td>
                  <td>{e.year1}</td>
                  <td>{e.year2}</td>
                  <td>{e.year3}</td>
                  <td style={{ fontWeight: 600 }}>{e.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>HK$2.3M</td>
                <td>HK$2.9M</td>
                <td>HK$2.35M</td>
                <td>{totalExpenditure}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div
          className="card"
          style={{
            marginTop: 'var(--space-8)',
            borderLeft: '4px solid var(--color-success)',
            maxWidth: '480px',
          }}
        >
          <h3>3-Year Net Position</h3>
          <p
            style={{
              fontSize: 'var(--text-xl)',
              fontWeight: 700,
              fontFamily: 'var(--font-display)',
              color: 'var(--color-success)',
              marginTop: 'var(--space-2)',
            }}
          >
            {netPosition}
          </p>
        </div>
      </div>
    </section>
  );
}
