import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import {
  type Language,
  translations,
} from './translations'

type Translation = (typeof translations)[Language]

type I18nContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const I18nContext =
  createContext<I18nContextValue | null>(null)

function getInitialLanguage(): Language {
  const storedLanguage = localStorage.getItem(
    'language',
  )

  if (
    storedLanguage === 'en-US' ||
    storedLanguage === 'pt-BR' ||
    storedLanguage === 'es'
  ) {
    return storedLanguage
  }

  return 'en-US'
}

export function I18nProvider({
  children,
}: PropsWithChildren) {
  const [language, setLanguage] =
    useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)

  if (!context) {
    throw new Error(
      'useI18n must be used inside I18nProvider',
    )
  }

  return context
}