import { useState } from 'react';
import Accordion from './components/Accordion';
import GlassField from './components/GlassField';
import ThemeToggle from './components/ThemeToggle';
import { ITEMS } from './data';
import { useSystemDark } from './hooks';

export default function App() {
  const [theme, setTheme] = useState('classic');
  const systemDark = useSystemDark();

  // Classic follows the system appearance; Liquid Glass is one fixed look.
  const resolved = theme === 'glass' ? 'glass' : systemDark ? 'dark' : 'light';

  return (
    <main
      data-theme={resolved}
      className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-8 pb-28 font-sans text-(--fg) [background:var(--bg)] transition-colors duration-300"
    >
      <GlassField visible={resolved === 'glass'} />

      <Accordion items={ITEMS} label="Record collecting guide" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ThemeToggle value={theme} onChange={setTheme} />
      </div>
    </main>
  );
}
