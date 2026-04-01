import { jurisdictions, jurisdictions_zh, transferStack, transferStack_zh, deidentStandard, deidentStandard_zh } from '../data/compliance';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

export default function ComplianceSection() {
  const lang = useLang();
  const jur = lang === 'zh' ? jurisdictions_zh : jurisdictions;
  const stack = lang === 'zh' ? transferStack_zh : transferStack;
  const deident = lang === 'zh' ? deidentStandard_zh : deidentStandard;

  return (
    <section id="compliance" className="section">
      <div className="container--wide">
        <p className="section-label">{t('comp.label', lang)}</p>
        <h2 className="section-title">{t('comp.title.1', lang)}<em>{t('comp.title.2', lang)}</em></h2>
        <p className="section-lead">{t('comp.lead', lang)}</p>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          {t('comp.laws', lang)}
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="data-table">
            <thead>
              <tr>
                <th>{t('comp.th.jurisdiction', lang)}</th>
                <th>{t('comp.th.law', lang)}</th>
                <th>{t('comp.th.obligation', lang)}</th>
              </tr>
            </thead>
            <tbody>
              {jur.map((j) => (
                <tr key={j.abbreviation}>
                  <td style={{ fontWeight: 600 }}>{j.jurisdiction}</td>
                  <td>{j.law} <span className="tag tag--amber">{j.abbreviation}</span></td>
                  <td>{j.obligation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginTop: 'var(--space-10)', marginBottom: 'var(--space-4)' }}>
          {t('comp.transfer', lang)}
        </h3>
        <div className="transfer-stack">
          {stack.map((s) => (
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
          {t('comp.deident', lang)}
        </h3>
        <ul style={{ listStyle: 'disc', paddingLeft: 'var(--space-6)' }}>
          {deident.map((d, i) => (
            <li key={i} style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--text-sm)' }}>{d}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
