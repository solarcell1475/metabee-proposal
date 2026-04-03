import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { isPublicGithubSite } from '../config/site';

/** en = full English; zh = full Chinese (with names); zh-public = SC-public-v2 anonymized Chinese */
export type Lang = 'en' | 'zh' | 'zh-public';

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageCtx>({ lang: 'en', setLang: () => {} });

function getInitialLang(): Lang {
  const stored = localStorage.getItem('metabee-lang');

  if (isPublicGithubSite) {
    if (stored === 'en' || stored === 'zh-public') return stored;
    // 曾保存「完整中文」的访客在公开站上改看脱敏版，避免继续看到人名
    if (stored === 'zh') return 'zh-public';
    const nav = navigator.language;
    if (nav.startsWith('zh')) return 'zh-public';
    return 'en';
  }

  if (stored === 'en' || stored === 'zh' || stored === 'zh-public') return stored;
  const nav = navigator.language;
  if (nav.startsWith('zh')) return 'zh';
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (l: Lang) => {
    if (isPublicGithubSite && l === 'zh') {
      setLangState('zh-public');
      return;
    }
    setLangState(l);
  };

  useEffect(() => {
    localStorage.setItem('metabee-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
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

/** True for full Chinese or SC-public-v2 (both use Chinese UI strings via `t()`). */
export function isChineseLang(lang: Lang): boolean {
  return lang === 'zh' || lang === 'zh-public';
}
