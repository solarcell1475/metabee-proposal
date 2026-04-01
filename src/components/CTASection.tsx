import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

export default function CTASection() {
  const lang = useLang();

  return (
    <section id="cta" className="cta">
      <div className="cta__inner">
        <h2 className="cta__title">{t('cta.title', lang)}</h2>
        <p className="cta__sub">{t('cta.sub', lang)}</p>
        <div className="cta__btns">
          <a className="btn-primary" href="mailto:bd@hkstp.org">
            {t('cta.contactHkstp', lang)}
          </a>
          <a className="btn-outline" href="#stakeholders">
            {t('cta.meetTeam', lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
