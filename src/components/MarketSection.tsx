import { marketStats, buyerSegments, buyerSegments_zh, competitiveEdge, competitiveEdge_zh } from '../data/market';
import { useLang, isChineseLang, type Lang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

function priorityTag(priority: string, lang: Lang) {
  const cls = priority === 'high' ? 'tag--green' : priority === 'medium' ? 'tag--amber' : 'tag--red';
  const label = isChineseLang(lang)
    ? (priority === 'high' ? '高' : priority === 'medium' ? '中' : '低')
    : priority.toUpperCase();
  return <span className={`tag ${cls}`}>{label}</span>;
}

export default function MarketSection() {
  const lang = useLang();
  const segments = isChineseLang(lang) ? buyerSegments_zh : buyerSegments;
  const edge = isChineseLang(lang) ? competitiveEdge_zh : competitiveEdge;

  const lead = t('market.lead', lang)
    .replace('{size}', marketStats.marketSize)
    .replace('{cagr}', marketStats.cagr)
    .replace('{period}', marketStats.cagrPeriod);

  return (
    <section id="market" className="section section--alt">
      <div className="container--wide">
        <p className="section-label">{t('market.label', lang)}</p>
        <h2 className="section-title">{t('market.title.1', lang)}<em>{t('market.title.2', lang)}</em></h2>
        <p className="section-lead">{lead}</p>

        <div className="card-grid" style={{ marginBottom: 'var(--space-10)' }}>
          <div className="card">
            <h3>{marketStats.marketSize}</h3>
            <p>{t('market.globalRwe', lang)}</p>
          </div>
          <div className="card">
            <h3>{marketStats.cagr}</h3>
            <p>{t('market.cagr', lang)}</p>
          </div>
          <div className="card">
            <h3>{marketStats.cohortValue}</h3>
            <p>{t('market.perDeal', lang)}</p>
          </div>
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          {t('market.targetBuyers', lang)}
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('market.th.segment', lang)}</th>
                <th>{t('market.th.examples', lang)}</th>
                <th>{t('market.th.useCase', lang)}</th>
                <th>{t('market.th.price', lang)}</th>
                <th>{t('market.th.priority', lang)}</th>
              </tr>
            </thead>
            <tbody>
              {segments.map((b) => (
                <tr key={b.segment}>
                  <td style={{ fontWeight: 600 }}>{b.segment}</td>
                  <td>{b.examples}</td>
                  <td>{b.useCase}</td>
                  <td style={{ fontWeight: 600 }}>{b.pricePoint}</td>
                  <td>{priorityTag(b.priority, lang)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 'var(--space-10)' }}>
          <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
            {t('market.competitive', lang)}
          </h3>
          <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
            {edge.map((c, i) => (
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
