import { useState } from 'react';
import {
  executionPhases, executionPhases_zh,
  regulatoryActions,
  executionPrinciples, executionPrinciples_zh,
  criticalPath,
  categoryLabels, categoryLabels_zh,
  type ActionCategory,
} from '../data/executionPlan';
import { anonymizeExecutionPlanTextForPublic } from '../data/executionPlanPublicZh';
import { useLang, type Lang, isChineseLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';
import { useFadeIn } from '../hooks/useFadeIn';

const allCategories: Array<ActionCategory | 'all'> = [
  'all', 'registration', 'ethics', 'contract', 'grant', 'data', 'commercial',
];

function statusLabel(status: string, lang: Lang) {
  switch (status) {
    case 'completed': return t('exec.status.done', lang);
    case 'in-progress': return t('exec.status.active', lang);
    case 'blocked': return t('exec.status.blocked', lang);
    default: return t('exec.status.pending', lang);
  }
}

function statusColor(status: string) {
  switch (status) {
    case 'completed': return { bg: 'var(--color-success-light)', color: 'var(--color-success)' };
    case 'in-progress': return { bg: 'var(--color-primary-light)', color: 'var(--color-primary)' };
    case 'blocked': return { bg: 'var(--color-accent-light)', color: 'var(--color-accent)' };
    default: return { bg: 'var(--color-surface-offset)', color: 'var(--color-text-muted)' };
  }
}

export default function ExecutionPlanSection() {
  const lang = useLang();
  const [activePhase, setActivePhase] = useState<1 | 2 | 3 | 'all'>('all');
  const [activeCategory, setActiveCategory] = useState<ActionCategory | 'all'>('all');
  const [expandedAction, setExpandedAction] = useState<string | null>(null);

  useFadeIn([activePhase, activeCategory, lang]);

  const phases = isChineseLang(lang) ? executionPhases_zh : executionPhases;
  const principles = isChineseLang(lang) ? executionPrinciples_zh : executionPrinciples;
  const catLabels = isChineseLang(lang) ? categoryLabels_zh : categoryLabels;

  const fmt = (s: string) => (lang === 'zh-public' ? anonymizeExecutionPlanTextForPublic(s) : s);

  const filtered = regulatoryActions.filter((a) => {
    if (activePhase !== 'all' && a.phase !== activePhase) return false;
    if (activeCategory !== 'all' && a.category !== activeCategory) return false;
    return true;
  });

  return (
    <section id="execution" className="section section--alt">
      <div className="container--wide">
        <p className="section-label">{t('exec.label', lang)}</p>
        <h2 className="section-title">{t('exec.title.1', lang)}<em>{t('exec.title.2', lang)}</em></h2>
        <p className="section-lead">{t('exec.lead', lang)}</p>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          {t('exec.principles', lang)}
        </h3>
        <div className="card-grid" style={{ marginBottom: 'var(--space-10)' }}>
          {principles.map((p, i) => (
            <div className="card fade-in" key={i}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          {t('exec.criticalPath', lang)}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-10)' }}>
          {criticalPath.map((path, i) => (
            <div key={i} className="fade-in" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-3) var(--space-5)', fontFamily: 'monospace', fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 600 }}>
              {fmt(path)}
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: 'var(--font-body)', marginBottom: 'var(--space-4)' }}>
          {t('exec.phasedPlan', lang)}
        </h3>

        <div className="filter-bar" style={{ marginBottom: 'var(--space-3)' }}>
          <button className={`filter-btn ${activePhase === 'all' ? 'active' : ''}`} onClick={() => setActivePhase('all')}>
            {t('exec.allPhases', lang)}
          </button>
          {phases.map((p) => (
            <button key={p.phase} className={`filter-btn ${activePhase === p.phase ? 'active' : ''}`} onClick={() => setActivePhase(p.phase as 1 | 2 | 3)}>
              {t('exec.phase', lang)} {p.phase}: {p.period}
            </button>
          ))}
        </div>

        <div className="filter-bar">
          {allCategories.map((cat) => (
            <button key={cat} className={`filter-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)} style={{ fontSize: 'var(--text-xs)' }}>
              {cat === 'all' ? t('exec.allTypes', lang) : catLabels[cat]}
            </button>
          ))}
        </div>

        {activePhase !== 'all' && (
          <div className="fade-in" style={{ background: 'var(--color-primary-light)', border: '1px solid var(--color-primary-highlight)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5) var(--space-6)', marginTop: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
            <p style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--space-1)' }}>
              {phases[activePhase - 1].title}
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
              {phases[activePhase - 1].objective}
            </p>
          </div>
        )}

        <div className="risk-grid" style={{ marginTop: 'var(--space-6)' }}>
          {filtered.map((a) => {
            const sc = statusColor(a.status);
            const isExpanded = expandedAction === a.id;
            return (
              <div key={a.id} className={`risk-row fade-in ${isExpanded ? 'expanded' : ''}`} onClick={() => setExpandedAction(isExpanded ? null : a.id)} style={{ cursor: 'pointer', display: 'block' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-primary)', fontFamily: 'monospace' }}>{a.id}</span>
                      <span className="tag tag--amber">{a.jurisdiction}</span>
                      <span className="tag" style={{ background: 'var(--color-surface-offset)', color: 'var(--color-text-muted)' }}>{catLabels[a.category]}</span>
                    </div>
                    <div className="risk-name">{fmt(a.action)}</div>
                    <div className="risk-desc">{fmt(a.law)} · {t('exec.owner', lang)}: {fmt(a.owner)} · {t('exec.deadline', lang)}: {a.deadline}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexShrink: 0 }}>
                    <span className="risk-badge" style={{ background: sc.bg, color: sc.color }}>{statusLabel(a.status, lang)}</span>
                    <span className="risk-badge" style={{ background: 'var(--color-surface-offset)', color: 'var(--color-text-muted)' }}>Ph. {a.phase}</span>
                  </div>
                </div>
                {isExpanded && (
                  <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-divider)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>{fmt(a.details)}</p>
                    {a.dependencies.length > 0 && (
                      <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                        <strong>{t('exec.dependencies', lang)}:</strong> {a.dependencies.join(' → ')}
                      </p>
                    )}
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-accent)' }}>
                      <strong>{t('exec.risk', lang)}:</strong> {fmt(a.risk)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', padding: 'var(--space-10)' }}>
            {t('exec.noMatch', lang)}
          </p>
        )}
      </div>
    </section>
  );
}
