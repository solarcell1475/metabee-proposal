import {
  fundingSources, fundingSources_zh,
  totalFunding,
  expenditure, expenditure_zh,
  totalExpenditure,
  netPosition,
} from '../data/budget';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

function probTag(p: string) {
  const cls = p === 'HIGH' ? 'tag--green' : 'tag--amber';
  return <span className={`tag ${cls}`}>{p}</span>;
}

export default function BudgetSection() {
  const lang = useLang();
  const funding = lang === 'zh' ? fundingSources_zh : fundingSources;
  const exp = lang === 'zh' ? expenditure_zh : expenditure;

  const lead = t('budget.lead', lang)
    .replace('{total}', totalFunding)
    .replace('{exp}', totalExpenditure)
    .replace('{net}', netPosition);

  return (
    <section id="budget" className="section">
      <div className="container--wide">
        <p className="section-label">{t('budget.label', lang)}</p>
        <h2 className="section-title">{t('budget.title.1', lang)}<em>{t('budget.title.2', lang)}</em></h2>
        <p className="section-lead">{lead}</p>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          {t('budget.funding', lang)}
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('budget.th.source', lang)}</th>
                <th>{t('budget.th.amount', lang)}</th>
                <th>{t('budget.th.timeline', lang)}</th>
                <th>{t('budget.th.probability', lang)}</th>
              </tr>
            </thead>
            <tbody>
              {funding.map((f) => (
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
                <td>{t('budget.totalFunding', lang)}</td>
                <td colSpan={3}>{totalFunding}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)' }}>
          {t('budget.expenditure', lang)}
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('budget.th.category', lang)}</th>
                <th>{t('budget.th.year1', lang)}</th>
                <th>{t('budget.th.year2', lang)}</th>
                <th>{t('budget.th.year3', lang)}</th>
                <th>{t('budget.th.total', lang)}</th>
              </tr>
            </thead>
            <tbody>
              {exp.map((e) => (
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
                <td>{t('budget.th.total', lang)}</td>
                <td>HK$2.3M</td>
                <td>HK$2.9M</td>
                <td>HK$2.35M</td>
                <td>{totalExpenditure}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="card" style={{ marginTop: 'var(--space-8)', borderLeft: '4px solid var(--color-success)', maxWidth: '480px' }}>
          <h3>{t('budget.netPosition', lang)}</h3>
          <p style={{ fontSize: 'var(--text-xl)', fontWeight: 700, fontFamily: 'var(--font-display)', color: 'var(--color-success)', marginTop: 'var(--space-2)' }}>
            {netPosition}
          </p>
        </div>
      </div>
    </section>
  );
}
