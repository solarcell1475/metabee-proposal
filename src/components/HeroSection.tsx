import { vision } from '../data/vision';

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner">
        <p className="hero__eyebrow">{vision.codename} &middot; v{vision.version}</p>
        <h1 className="hero__title">
          GBA <em>Health Data</em> Commercialisation
        </h1>
        <p className="hero__subtitle">{vision.oneLiner}</p>
        <div className="hero__stats">
          {vision.heroStats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-val">{s.value}</span>
              <span className="hero__stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
