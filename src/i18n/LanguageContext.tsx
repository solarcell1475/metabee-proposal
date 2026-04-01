import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Lang = 'en' | 'zh';

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageCtx>({ lang: 'en', setLang: () => {} });

function getInitialLang(): Lang {
  const stored = localStorage.getItem('metabee-lang');
  if (stored === 'en' || stored === 'zh') return stored;
  const nav = navigator.language;
  if (nav.startsWith('zh')) return 'zh';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    localStorage.setItem('metabee-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): Lang {
  return useContext(LanguageContext).lang;
}

export function useLanguageCtx(): LanguageCtx {
  return useContext(LanguageContext);
}
