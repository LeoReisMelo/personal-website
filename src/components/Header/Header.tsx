import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import styled from 'styled-components'
import { Container } from '../Container/Container'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

const HeaderElement = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  background: color-mix(
    in srgb,
    var(--color-background) 88%,
    transparent
  );
  backdrop-filter: blur(18px);
`

const HeaderContent = styled.div`
  display: flex;
  height: 76px;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
`

const LogoMark = styled.span`
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--color-brand);
  color: var(--color-white);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
`

const LogoText = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.02em;
`

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 850px) {
    display: none;
  }
`

const NavigationLink = styled.a`
  color: var(--color-text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-text);
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ContactButton = styled.a`
  display: inline-flex;
  height: 40px;
  align-items: center;
  padding: 0 1rem;
  border-radius: 999px;
  background: var(--color-brand);
  color: var(--color-white);
  font-size: 0.8rem;
  font-weight: 600;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    background: var(--color-brand-dark);
    transform: translateY(-1px);
  }

  @media (max-width: 850px) {
    display: none;
  }
`

const MobileButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;

  @media (max-width: 850px) {
    display: inline-flex;
  }
`

const MobileNavigation = styled.nav`
  display: none;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 0 1rem;
  }
`

const MobileNavigationLink = styled.a`
  padding: 0.75rem 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;

  &:hover {
    color: var(--color-brand);
  }
`

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <HeaderElement>
      <Container>
        <HeaderContent>
          <Logo href="" onClick={closeMenu}>
            <LogoMark>LR</LogoMark>
            <LogoText>Leonardo Reis Melo</LogoText>
          </Logo>

          <Navigation aria-label="Main navigation">
            <NavigationLink href="#about">About</NavigationLink>
            <NavigationLink href="#experience">Experience</NavigationLink>
            <NavigationLink href="#projects">Projects</NavigationLink>
            <NavigationLink href="#writing">Writing</NavigationLink>
            <NavigationLink href="#services">Services</NavigationLink>
          </Navigation>

          <Actions>
            <ThemeToggle />

            <ContactButton href="#contact">
              Let&apos;s talk
            </ContactButton>

            <MobileButton
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </MobileButton>
          </Actions>
        </HeaderContent>

        {isOpen && (
          <MobileNavigation id="mobile-navigation">
            <MobileNavigationLink href="#about" onClick={closeMenu}>
              About
            </MobileNavigationLink>

            <MobileNavigationLink
              href="#experience"
              onClick={closeMenu}
            >
              Experience
            </MobileNavigationLink>

            <MobileNavigationLink
              href="#projects"
              onClick={closeMenu}
            >
              Projects
            </MobileNavigationLink>

            <MobileNavigationLink href="#writing" onClick={closeMenu}>
              Writing
            </MobileNavigationLink>

            <MobileNavigationLink
              href="#services"
              onClick={closeMenu}
            >
              Services
            </MobileNavigationLink>
          </MobileNavigation>
        )}
      </Container>
    </HeaderElement>
  )
}