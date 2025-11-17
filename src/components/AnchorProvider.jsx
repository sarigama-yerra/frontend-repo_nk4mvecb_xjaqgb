import { useEffect } from 'react';

export default function AnchorProvider({ children }) {
  useEffect(() => {
    const handler = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 72; // account for fixed header
      window.scrollTo({ top: y, behavior: 'smooth' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return children;
}
