import { useEffect } from 'react';

export function useFadeIn(deps: unknown[] = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        }
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.05 },
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
        observer.observe(el);
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
