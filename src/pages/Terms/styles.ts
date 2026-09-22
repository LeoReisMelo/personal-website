import styled from 'styled-components'

export const Document = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 9rem 0 6rem;
  background: var(--color-background);
`

export const DocumentHeader = styled.header`
  max-width: 820px;
  margin: 0 auto;
  padding-bottom: 4rem;
`

export const IconWrapper = styled.div`
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-brand);
  box-shadow: 0 8px 24px rgb(0 0 0 / 5%);
`

export const Eyebrow = styled.span`
  display: block;
  margin-bottom: 1rem;
  color: var(--color-brand);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  line-height: 1;
  text-transform: uppercase;
`

export const Title = styled.h1`
  color: var(--color-text);
  font-size: clamp(2.75rem, 6vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.06em;
  line-height: 0.98;
`

export const LastUpdated = styled.p`
  margin-top: 1.25rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.6;
`

export const Section = styled.section`
  max-width: 820px;
  margin: 0 auto;
  padding: 2.5rem 0;
  border-top: 1px solid var(--color-border);

  &:last-of-type {
    padding-bottom: 3rem;
  }
`

export const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 650;
  letter-spacing: -0.025em;
  line-height: 1.3;
`

export const Text = styled.p`
  max-width: 760px;
  color: var(--color-text-secondary);
  font-size: 1rem;
  line-height: 1.85;

  & + & {
    margin-top: 1rem;
  }
`

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    color var(--transition-fast),
    gap var(--transition-fast);

  &:hover {
    gap: 0.75rem;
    color: var(--color-brand);
  }

  &:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }
`