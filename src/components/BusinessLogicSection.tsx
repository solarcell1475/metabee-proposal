import { businessLayers } from '../data/businessLogic';

export default function BusinessLogicSection() {
  return (
    <section id="business" className="section section--alt">
      <div className="container--wide">
        <p className="section-label">Business Model</p>
        <h2 className="section-title">Three-Layer <em>Business Logic</em></h2>
        <p className="section-lead">
          From academic credibility to data asset creation to commercial
          monetisation — a vertically integrated value chain.
        </p>
        <div className="layers">
          {businessLayers.map((layer) => (
            <div
              className="layer fade-in"
              key={layer.id}
              style={{ borderLeftColor: layer.color }}
            >
              <p className="layer__number">Layer {layer.number}</p>
              <h3 className="layer__title">{layer.title}</h3>
              <p className="layer__subtitle">{layer.subtitle}</p>
              <ul className="layer__steps">
                {layer.steps.map((step, i) => (
                  <li className="layer__step" key={i}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
