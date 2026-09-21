import { ArrowDown, ArrowUpRight } from 'lucide-react'
import styled from 'styled-components'
import profilePhoto from '../../assets/perfil.jpg'
import { Container } from '../../components/Container/Container'

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 76px);
  overflow: hidden;
  background: var(--color-background);
`

const Grid = styled.div`
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
    black 0%,
    transparent 80%
  );
  opacity: 0.35;
  pointer-events: none;
`

const Glow = styled.div`
  position: absolute;
  top: 5%;
  right: -10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: var(--color-brand);
  opacity: 0.08;
  filter: blur(120px);
  pointer-events: none;
`

const Content = styled.div`
  position: relative;
  display: grid;
  min-height: calc(100vh - 76px);
  grid-template-columns: minmax(0, 1fr) minmax(420px, 0.8fr);
  gap: 6rem;
  align-items: center;
  padding: 5rem 4rem;

  @media (max-width: 1200px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 0;
  }
`

const Copy = styled.div`
  max-width: 760px;
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

const Title = styled.h1`
  max-width: 850px;
  color: var(--color-text);
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 0.98;
`

const Highlight = styled.span`
  color: var(--color-brand);
`

const Description = styled.p`
  max-width: 650px;
  margin-top: 2rem;
  color: var(--color-text-muted);
  font-size: clamp(1rem, 1.5vw, 1.15rem);
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
  height: 48px;
  align-items: center;
  gap: 0.6rem;
  padding: 0 1.25rem;
  border-radius: 999px;
  background: var(--color-brand);
  color: var(--color-white);
  font-size: 0.875rem;
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
  height: 48px;
  align-items: center;
  padding: 0 1.25rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 0.875rem;
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

const Visual = styled.div`
  position: relative;
  display: flex;
  min-height: 560px;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    min-height: 460px;
  }
`

const PhotoGlow = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: var(--color-brand);
  opacity: 0.12;
  filter: blur(100px);
  pointer-events: none;
`

const PhotoFrame = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 440px);
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-background-alt);
  box-shadow:
    0 30px 80px rgb(0 0 0 / 12%),
    0 0 0 1px rgb(255 255 255 / 5%);

  @media (max-width: 900px) {
    width: min(100%, 380px);
  }
`

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

const ScrollIndicator = styled.a`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  &:hover {
    color: var(--color-brand);
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export function Hero() {
  return (
    <Section id="home">
      <Grid />
      <Glow />

      <Container>
        <Content>
          <Copy>
            <Eyebrow>
              <EyebrowDot />
              Software Engineer
            </Eyebrow>

            <Title>
              I build software that
              <Highlight> solves real problems.</Highlight>
            </Title>

            <Description>
              Software Engineer focused on backend engineering, cloud
              infrastructure, distributed systems, and building products
              designed to evolve.
            </Description>

            <Actions>
              <PrimaryButton href="#projects">
                View my work
                <ArrowUpRight size={17} />
              </PrimaryButton>

              <SecondaryButton href="#contact">
                Let&apos;s talk
              </SecondaryButton>
            </Actions>
          </Copy>

          <Visual>
            <PhotoGlow />

            <PhotoFrame>
              <Photo
                src={profilePhoto}
                alt="Leonardo Reis Melo"
              />
            </PhotoFrame>
          </Visual>
        </Content>
      </Container>

      <ScrollIndicator href="#about">
        Scroll
        <ArrowDown size={14} />
      </ScrollIndicator>
    </Section>
  )
}