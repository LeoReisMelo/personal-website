import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  padding: 9rem 0;
  background: var(--color-background-alt);
`

const Header = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(0, 1fr);
  gap: 6rem;
  align-items: end;
  margin-bottom: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;

  color: var(--color-brand);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const EyebrowDot = styled.span`
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--color-brand);
  box-shadow: 0 0 0 5px var(--color-brand-soft);
`

const Title = styled.h2`
  max-width: 650px;

  color: var(--color-text);

  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 0.98;
`

const Highlight = styled.span`
  color: var(--color-brand);
`

const Description = styled.p`
  max-width: 620px;

  justify-self: end;

  color: var(--color-text-muted);

  font-size: 1rem;
  line-height: 1.8;

  @media (max-width: 900px) {
    justify-self: start;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;

  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);

  background: var(--color-border);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  position: relative;

  min-height: 300px;
  padding: 2rem;

  overflow: hidden;

  background: var(--color-surface);

  transition:
    background var(--transition-normal),
    transform var(--transition-normal);

  &:hover {
    background: var(--color-surface-hover);
  }
`

const CardGlow = styled.div`
  position: absolute;

  top: -100px;
  right: -100px;

  width: 220px;
  height: 220px;

  border-radius: 50%;

  background: var(--color-brand);

  opacity: 0;

  filter: blur(80px);

  transition: opacity var(--transition-normal);

  pointer-events: none;

  ${Card}:hover & {
    opacity: 0.08;
  }
`

const CardHeader = styled.div`
  position: relative;
  z-index: 1;

  display: flex;

  align-items: flex-start;
  justify-content: space-between;
`

const Icon = styled.div`
  display: flex;

  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-border);
  border-radius: 14px;

  background: var(--color-background);

  color: var(--color-brand);
`

const Number = styled.span`
  color: var(--color-text-muted);

  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
`

const CardContent = styled.div`
  position: relative;
  z-index: 1;

  margin-top: 5rem;
`

const CardTitle = styled.h3`
  color: var(--color-text);

  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`

const CardDescription = styled.p`
  max-width: 340px;

  margin-top: 0.75rem;

  color: var(--color-text-muted);

  font-size: 0.85rem;
  line-height: 1.7;
`

const Technologies = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 0.5rem;

  margin-top: 1.25rem;
`

const Technology = styled.span<{
  $color: string
  $showLabel?: boolean
}>`
  position: relative;

  display: inline-flex;

  align-items: center;
  gap: 0.4rem;

  padding: ${({ $showLabel }) =>
    $showLabel ? '0.35rem 0.6rem' : '0.4rem'};

  border: 1px solid var(--color-border);
  border-radius: 999px;

  color: ${({ $color }) => $color};

  font-family: var(--font-mono);
  font-size: 0.62rem;

  transition:
    border-color var(--transition-fast),
    background var(--transition-fast),
    transform var(--transition-fast);

  svg {
    flex-shrink: 0;
  }

  &:hover {
    border-color: ${({ $color }) => $color};
    background: var(--color-background);
    transform: translateY(-2px);
  }
`

export {
  Card,
  CardContent,
  CardDescription,
  CardGlow,
  CardHeader,
  CardTitle,
  Description,
  Eyebrow,
  EyebrowDot,
  Grid,
  Header,
  Highlight,
  Icon,
  Number,
  Section,
  Technologies,
  Technology,
  Title,
}