import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ToggleButton } from './styles'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const storedTheme = localStorage.getItem('theme')

  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  function handleToggle() {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  const isDark = theme === 'dark'

  return (
    <ToggleButton
      type="button"
      onClick={handleToggle}
      aria-label={
        isDark ? 'Switch to light mode' : 'Switch to dark mode'
      }
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </ToggleButton>
  )
}