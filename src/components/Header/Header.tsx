import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { useI18n } from "../../i18n/I18nProvider";
import { languages, type Language } from "../../i18n/translations";
import { Container } from "../Container/Container";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import {
  Actions,
  ContactButton,
  HeaderContent,
  HeaderElement,
  LanguageButton,
  LanguageFlag,
  LanguageMenu,
  LanguageOption,
  LanguageWrapper,
  Logo,
  LogoMark,
  LogoText,
  MobileButton,
  MobileLanguageButton,
  MobileLanguageLabel,
  MobileLanguageOptions,
  MobileLanguageSection,
  MobileNavigation,
  MobileNavigationLink,
  Navigation,
  NavigationLink,
} from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const { language, setLanguage, t } = useI18n();

  const currentLanguage = languages.find((item) => item.code === language);

  function closeMenu() {
    setIsOpen(false);
  }

  function handleLanguageChange(nextLanguage: Language) {
    setLanguage(nextLanguage);
    setIsLanguageOpen(false);
  }

  return (
    <HeaderElement>
      <Container>
        <HeaderContent>
          <Logo
            href="#home"
            onClick={closeMenu}
            aria-label="Leonardo Reis Melo"
          >
            <LogoMark>LR</LogoMark>
            <LogoText>Leonardo Reis Melo</LogoText>
          </Logo>
          <Navigation aria-label="Main navigation">
            <NavigationLink href="#about">{t.navigation.about}</NavigationLink>
            <NavigationLink href="#experience">
              {t.navigation.experience}
            </NavigationLink>
            <NavigationLink href="#projects">
              {t.navigation.projects}
            </NavigationLink>
            <NavigationLink href="#expertise">
              {t.navigation.expertise}
            </NavigationLink>
            <NavigationLink href="#services">
              {t.navigation.services}
            </NavigationLink>
          </Navigation>
          <Actions>
            <LanguageWrapper>
              <LanguageButton
                type="button"
                aria-label={t.accessibility.selectLanguage}
                aria-expanded={isLanguageOpen}
                aria-haspopup="menu"
                onClick={() => setIsLanguageOpen((current) => !current)}
              >
                <LanguageFlag>{currentLanguage?.flag}</LanguageFlag>
                <span>{currentLanguage?.label}</span>
                <ChevronDown size={14} aria-hidden="true" />
              </LanguageButton>
              {isLanguageOpen && (
                <LanguageMenu role="menu" aria-label={t.navigation.language}>
                  {languages.map((item) => (
                    <LanguageOption
                      key={item.code}
                      type="button"
                      role="menuitem"
                      $active={language === item.code}
                      aria-current={language === item.code ? "true" : undefined}
                      onClick={() => handleLanguageChange(item.code)}
                    >
                      <LanguageFlag>{item.flag}</LanguageFlag>

                      <span>{item.label}</span>
                    </LanguageOption>
                  ))}
                </LanguageMenu>
              )}
            </LanguageWrapper>
            <ThemeToggle />
            <ContactButton href="#contact">
              {t.navigation.contact}
            </ContactButton>
            <MobileButton
              type="button"
              aria-label={
                isOpen ? t.accessibility.closeMenu : t.accessibility.openMenu
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? (
                <X size={19} aria-hidden="true" />
              ) : (
                <Menu size={19} aria-hidden="true" />
              )}
            </MobileButton>
          </Actions>
        </HeaderContent>

        {isOpen && (
          <MobileNavigation
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            <MobileNavigationLink href="#about" onClick={closeMenu}>
              {t.navigation.about}
            </MobileNavigationLink>
            <MobileNavigationLink href="#experience" onClick={closeMenu}>
              {t.navigation.experience}
            </MobileNavigationLink>
            <MobileNavigationLink href="#projects" onClick={closeMenu}>
              {t.navigation.projects}
            </MobileNavigationLink>
            <MobileNavigationLink href="#expertise" onClick={closeMenu}>
              {t.navigation.expertise}
            </MobileNavigationLink>
            <MobileNavigationLink href="#services" onClick={closeMenu}>
              {t.navigation.services}
            </MobileNavigationLink>
            <MobileLanguageSection>
              <MobileLanguageLabel>{t.navigation.language}</MobileLanguageLabel>

              <MobileLanguageOptions>
                {languages.map((item) => (
                  <MobileLanguageButton
                    key={item.code}
                    type="button"
                    $active={language === item.code}
                    aria-current={language === item.code ? "true" : undefined}
                    onClick={() => handleLanguageChange(item.code)}
                  >
                    <LanguageFlag>{item.flag}</LanguageFlag>

                    <span>{item.label}</span>
                  </MobileLanguageButton>
                ))}
              </MobileLanguageOptions>
            </MobileLanguageSection>
          </MobileNavigation>
        )}
      </Container>
    </HeaderElement>
  );
}
