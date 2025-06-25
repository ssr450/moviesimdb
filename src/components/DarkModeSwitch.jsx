'use client';

import { useTheme } from 'next-themes';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === 'system' ? (systemTheme || 'light') : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <button
          aria-label="Switch to light mode"
          onClick={() => setTheme('light')}
          className="text-2xl cursor-pointer hover:text-purple-400"
        >
          <MdLightMode />
        </button>
      ) : (
        <button
          aria-label="Switch to dark mode"
          onClick={() => setTheme('dark')}
          className="text-2xl cursor-pointer hover:text-purple-600"
        >
          <MdDarkMode />
        </button>
      )}
    </div>
  );
}
