import { useState, useEffect } from 'react';
import { LanguageProvider, useLang } from './i18n/LanguageContext';
import { t } from './i18n/ui';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PolicySection from './components/PolicySection';
import BusinessLogicSection from './components/BusinessLogicSection';
import HSITPSection from './components/HSITPSection';
import StakeholderSection from './components/StakeholderSection';
import TimelineSection from './components/TimelineSection';
import MarketSection from './components/MarketSection';
import ComplianceSection from './components/ComplianceSection';
import RiskSection from './components/RiskSection';
import BudgetSection from './components/BudgetSection';
import ExecutionPlanSection from './components/ExecutionPlanSection';
import CTASection from './components/CTASection';
import { useFadeIn } from './hooks/useFadeIn';

function getInitialTheme(): 'light' | 'dark' {
  const stored = localStorage.getItem('metabee-theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function AppInner() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const lang = useLang();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('metabee-theme', theme);
  }, [theme]);

  useFadeIn([lang]);

  useEffect(() => {
    const base = 'MetaBee × GBA Healthcare Data';
    document.title = lang === 'zh-public' ? `${base} · SC-public-v2` : base;
  }, [lang]);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <PolicySection />
        <BusinessLogicSection />
        <HSITPSection />
        <StakeholderSection />
        <TimelineSection />
        <MarketSection />
        <ComplianceSection />
        <RiskSection />
        <BudgetSection />
        <ExecutionPlanSection />
        <CTASection />
      </main>
      <footer className="footer">
        <p>
          {lang === 'zh-public'
            ? 'MetaBee.com (HK) · Wasabi-GBA · SC-public-v2 · 公开版（不含具体人名）· 2026-03-30'
            : t('footer.text', lang)}
        </p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
