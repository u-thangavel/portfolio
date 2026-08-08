'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Cloud } from 'lucide-react';
import styles from './ThemeToggle.module.css';

type Theme = 'dark' | 'cloud';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'cloud') return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'cloud' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'cloud' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('theme', next);
  };

  return (
    <button
      type="button"
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'cloud' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'cloud' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Cloud size={16} /> : <Moon size={16} />}
    </button>
  );
}
