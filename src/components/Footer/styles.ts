import styled from 'styled-components'

const FooterElement = styled.footer`
  width: 100%;
  border-top: 1px solid var(--color-border);
  background: var(--color-background-alt);
`

const Main = styled.div`
  padding: 5rem 0 4rem;

  @media (max-width: 700px) {
    padding: 4rem 0 3rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 1.4fr) repeat(3, minmax(150px, 1fr));
  gap: 4rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const BrandColumn = styled.div`
  max-width: 380px;
`

const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
`

const LogoMark = styled.span`
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: var(--color-brand);
  color: var(--color-white);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: -0.05em;
`

const BrandName = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`

const BrandDescription = styled.p`
  max-width: 340px;
  margin-top: 1.5rem;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  line-height: 1.8;
`

const MadeWith = styled.p`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 1.5rem;
  color: var(--color-text-muted);
  font-size: 0.72rem;
`

const Heart = styled.span`
  color: var(--color-brand);
  font-size: 0.9rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const ColumnTitle = styled.h3`
  margin-bottom: 1.25rem;
  color: var(--color-text);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const Links = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
`

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--color-text-muted);
  font-size: 0.8rem;
  transition:
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    color: var(--color-brand);
    transform: translateX(2px);
  }
`

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContactItem = styled.a`
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  color: var(--color-text-muted);
  font-size: 0.78rem;
  line-height: 1.5;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-brand);
  }

  svg {
    flex-shrink: 0;
    margin-top: 0.1rem;
  }
`

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 1.25rem;
`

const CompanyLabel = styled.span`
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

const CompanyValue = styled.span`
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.7rem;
`

const Bottom = styled.div`
  border-top: 1px solid var(--color-border);
`

const BottomContent = styled.div`
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
    padding: 1.5rem 0;
  }
`

const Copyright = styled.p`
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.62rem;
`

const BottomLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1.25rem;
  }
`

const BottomLink = styled.a`
  color: var(--color-text-muted);
  font-size: 0.68rem;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-brand);
  }
`

const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  text-transform: uppercase;
  transition:
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    color: var(--color-brand);
    transform: translateY(-1px);
  }
`

export {
  FooterElement,
  Main,
  Grid,
  BrandColumn,
  Brand,
  LogoMark,
  BrandName,
  BrandDescription,
  MadeWith,
  Heart,
  Column,
  ColumnTitle,
  Links,
  Link,
  ContactList,
  ContactItem,
  CompanyInfo,
  CompanyLabel,
  CompanyValue,
  Bottom,
  BottomContent,
  Copyright,
  BottomLink,
  BottomLinks,
  BackToTop,
}