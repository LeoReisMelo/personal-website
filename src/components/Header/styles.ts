import styled from "styled-components";

const HeaderElement = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid var(--color-border);
  background: color-mix(in srgb, var(--color-background) 88%, transparent);
  backdrop-filter: blur(18px);
`;

const HeaderContent = styled.div`
  display: flex;
  height: 76px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
`;

const LogoMark = styled.span`
  display: flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--color-brand);
  color: var(--color-white);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
`;

const LogoText = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 950px) {
    display: none;
  }
`;

const NavigationLink = styled.a`
  color: var(--color-text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-text);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LanguageWrapper = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  display: inline-flex;
  height: 40px;
  align-items: center;
  gap: 0.4rem;
  padding: 0 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition:
    border-color var(--transition-fast),
    color var(--transition-fast),
    background var(--transition-fast);

  &:hover {
    border-color: var(--color-brand);
    color: var(--color-brand);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 3px;
  }
`;

const LanguageFlag = styled.span`
  display: inline-flex;
  width: 18px;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1;
`;

const LanguageMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.6rem);
  right: 0;
  min-width: 125px;
  padding: 0.35rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: 0 12px 30px rgb(0 0 0 / 10%);
`;

const LanguageOption = styled.button<{
  $active: boolean;
}>`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.55rem;
  padding: 0.65rem 0.7rem;
  border-radius: 8px;
  background: ${({ $active }) =>
    $active ? "var(--color-brand-soft)" : "transparent"};
  color: ${({ $active }) =>
    $active ? "var(--color-brand)" : "var(--color-text-muted)"};
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: left;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: var(--color-brand-soft);
    color: var(--color-brand);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: -2px;
  }
`;

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

  &:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 3px;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;

const MobileButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;

  &:hover {
    border-color: var(--color-brand);
    color: var(--color-brand);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 3px;
  }

  @media (max-width: 950px) {
    display: inline-flex;
  }
`;

const MobileNavigation = styled.nav`
  display: none;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0 0 1rem;
  }
`;

const MobileNavigationLink = styled.a`
  padding: 0.75rem 0;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-brand);
  }
`;

const MobileLanguageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding: 1rem 0 0;
  border-top: 1px solid var(--color-border);
`;

const MobileLanguageLabel = styled.span`
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const MobileLanguageOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const MobileLanguageButton = styled.button<{
  $active: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid
    ${({ $active }) => ($active ? "var(--color-brand)" : "var(--color-border)")};
  border-radius: 999px;
  background: ${({ $active }) =>
    $active ? "var(--color-brand-soft)" : "var(--color-surface)"};
  color: ${({ $active }) =>
    $active ? "var(--color-brand)" : "var(--color-text-muted)"};
  cursor: pointer;
  font-size: 0.75rem;
  font-weight: 600;
  transition:
    border-color var(--transition-fast),
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    border-color: var(--color-brand);
    background: var(--color-brand-soft);
    color: var(--color-brand);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 3px;
  }
`;

export {
  HeaderElement,
  HeaderContent,
  Logo,
  LogoMark,
  LogoText,
  Navigation,
  NavigationLink,
  Actions,
  LanguageButton,
  LanguageFlag,
  LanguageMenu,
  LanguageOption,
  LanguageWrapper,
  ContactButton,
  MobileButton,
  MobileLanguageButton,
  MobileLanguageLabel,
  MobileLanguageOptions,
  MobileLanguageSection,
  MobileNavigation,
  MobileNavigationLink
};
