import styled from 'styled-components'


const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 9rem 0 7rem;
  background: var(--color-background-alt);
`

const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(
      to right,
      var(--color-border) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      var(--color-border) 1px,
      transparent 1px
    );
  background-size: 80px 80px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
  opacity: 0.3;
  pointer-events: none;
`

const Glow = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: var(--color-brand);
  opacity: 0.07;
  filter: blur(130px);
  transform: translateX(-50%);
  pointer-events: none;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const Header = styled.div`
  max-width: 900px;
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
  max-width: 950px;
  color: var(--color-text);
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 0.96;
`

const Highlight = styled.span`
  color: var(--color-brand);
`

const Description = styled.p`
  max-width: 650px;
  margin-top: 2rem;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
`

const PrimaryButton = styled.a`
  display: inline-flex;
  height: 50px;
  align-items: center;
  gap: 0.6rem;
  padding: 0 1.35rem;
  border-radius: 999px;
  background: var(--color-brand);
  color: var(--color-white);
  font-size: 0.85rem;
  font-weight: 600;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);

  &:hover {
    background: var(--color-brand-dark);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgb(229 57 53 / 20%);
  }
`

const SecondaryButton = styled.a`
  display: inline-flex;
  height: 50px;
  align-items: center;
  padding: 0 1.35rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 0.85rem;
  font-weight: 600;
  transition:
    border-color var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    border-color: var(--color-brand);
    color: var(--color-brand);
    transform: translateY(-2px);
  }
`

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 6rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 4rem;
  }
`

const Detail = styled.a`
  display: flex;
  min-height: 110px;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  transition:
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);

  &:hover {
    border-color: var(--color-border-hover);
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgb(0 0 0 / 6%);
  }
`

const DetailIcon = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--color-brand-soft);
  color: var(--color-brand);
`

const DetailContent = styled.div`
  min-width: 0;
`

const DetailLabel = styled.span`
  display: block;
  margin-bottom: 0.35rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

const DetailValue = styled.span`
  display: block;
  overflow: hidden;
  color: var(--color-text);
  font-size: 0.82rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${Detail}:hover & {
    color: var(--color-brand);
  }
`

export {
    Section,
    BackgroundGrid,
    Glow,
    Content,
    Header,
    Eyebrow,
    EyebrowDot,
    Title,
    Highlight,
    Description,
    Actions,
    PrimaryButton,
    SecondaryButton,
    Details,
    Detail,
    DetailIcon,
    DetailContent,
    DetailLabel,
    DetailValue
}