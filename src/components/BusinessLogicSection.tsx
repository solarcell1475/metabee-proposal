import { businessLayers, businessLayers_zh } from '../data/businessLogic';
import { useLang } from '../i18n/LanguageContext';
import { t } from '../i18n/ui';

export default function BusinessLogicSection() {
  const lang = useLang();
  const data = lang === 'zh' ? businessLayers_zh : businessLayers;

  return (
    <section id="business" className="section section--alt">
      <div className="container--wide">
        <p className="section-label">{t('biz.label', lang)}</p>
        <h2 className="section-title">{t('biz.title.1', lang)}<em>{t('biz.title.2', lang)}</em></h2>
        <p className="section-lead">{t('biz.lead', lang)}</p>
        <div className="layers">
          {data.map((layer) => (
            <div
              className="layer fade-in"
              key={layer.id}
              style={{ borderLeftColor: layer.color }}
            >
              <p className="layer__number">{t('biz.layer', lang)} {layer.number}</p>
              <h3 className="layer__title">{layer.title}</h3>
              <p className="layer__subtitle">{layer.subtitle}</p>
              <ul className="layer__steps">
                {layer.steps.map((step, i) => (
                  <li className="layer__step" key={i}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
