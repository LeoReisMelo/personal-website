import { ArrowUpRight, Code2, Layers3, Server, Zap } from 'lucide-react'
import styled from 'styled-components'

import { Container } from '../../components/Container/Container'

const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 8rem 0;
  overflow: hidden;
  background: var(--color-background-alt);
`

const SectionLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-border);
`

const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(280px, 0.7fr) minmax(0, 1.3fr);
  gap: 6rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`

const Intro = styled.div`
  position: sticky;
  top: 120px;

  @media (max-width: 900px) {
    position: static;
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
  max-width: 500px;
  color: var(--color-text);
  font-size: clamp(2.75rem, 5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.06em;
  line-height: 0.98;
`

const Highlight = styled.span`
  color: var(--color-brand);
`

const Main = styled.div`
  max-width: 760px;
`

const Lead = styled.p`
  color: var(--color-text);
  font-size: clamp(1.35rem, 2.2vw, 1.8rem);
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.45;
`

const Paragraph = styled.p`
  margin-top: 1.5rem;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.85;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 4rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Stat = styled.div`
  padding: 1.75rem 1.5rem;

  &:not(:last-child) {
    border-right: 1px solid var(--color-border);
  }

  @media (max-width: 600px) {
    &:not(:last-child) {
      border-right: 0;
      border-bottom: 1px solid var(--color-border);
    }
  }
`

const StatValue = styled.strong`
  display: block;
  color: var(--color-text);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.04em;
`

const StatLabel = styled.span`
  display: block;
  margin-top: 0.4rem;
  color: var(--color-text-muted);
  font-size: 0.8rem;
`

const Principles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  margin-top: 4rem;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-border);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const Principle = styled.div`
  padding: 2rem;
  background: var(--color-background-alt);
  transition:
    background var(--transition-normal),
    transform var(--transition-normal);

  &:hover {
    background: var(--color-surface);
  }
`

const IconWrapper = styled.div`
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-brand);
`

const PrincipleTitle = styled.h3`
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: -0.02em;
`

const PrincipleText = styled.p`
  margin-top: 0.65rem;
  color: var(--color-text-muted);
  font-size: 0.875rem;
  line-height: 1.7;
`

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  color: var(--color-text);
  font-size: 0.875rem;
  font-weight: 600;
  transition:
    color var(--transition-fast),
    gap var(--transition-fast);

  &:hover {
    color: var(--color-brand);
    gap: 0.75rem;
  }
`

export function About() {
  return (
    <Section id="about">
      <SectionLine />

      <Container>
        <Content>
          <Intro>
            <Eyebrow>
              <EyebrowDot />
              About me
            </Eyebrow>

            <Title>
              Building software
              <Highlight> with purpose.</Highlight>
            </Title>
          </Intro>

          <Main>
            <Lead>
              I&apos;m a Software Engineer focused on building reliable
              systems, solving complex problems, and turning ideas into
              software that can evolve over time.
            </Lead>

            <Paragraph>
              My work is mainly focused on backend engineering,
              architecture, APIs, databases, cloud infrastructure, and
              distributed systems. I care about more than making
              software work — I care about making it understandable,
              maintainable, observable, and prepared for change.
            </Paragraph>

            <Paragraph>
              I enjoy working close to the product and understanding the
              problem behind the code. For me, good engineering is about
              balancing technical decisions with business needs,
              simplicity, performance, and long-term sustainability.
            </Paragraph>

            <Stats>
              <Stat>
                <StatValue>Senior</StatValue>
                <StatLabel>Engineering level</StatLabel>
              </Stat>

              <Stat>
                <StatValue>Backend</StatValue>
                <StatLabel>Primary focus</StatLabel>
              </Stat>

              <Stat>
                <StatValue>Cloud</StatValue>
                <StatLabel>Infrastructure</StatLabel>
              </Stat>
            </Stats>

            <Principles>
              <Principle>
                <IconWrapper>
                  <Server size={19} />
                </IconWrapper>

                <PrincipleTitle>
                  Systems that scale
                </PrincipleTitle>

                <PrincipleText>
                  Designing backend systems with clear boundaries,
                  predictable behavior, and room to evolve.
                </PrincipleText>
              </Principle>

              <Principle>
                <IconWrapper>
                  <Code2 size={19} />
                </IconWrapper>

                <PrincipleTitle>
                  Clean engineering
                </PrincipleTitle>

                <PrincipleText>
                  Writing code that is readable, testable, and easier
                  for teams to maintain.
                </PrincipleText>
              </Principle>

              <Principle>
                <IconWrapper>
                  <Layers3 size={19} />
                </IconWrapper>

                <PrincipleTitle>
                  Architecture with context
                </PrincipleTitle>

                <PrincipleText>
                  Choosing technologies and patterns based on the actual
                  problem instead of following trends blindly.
                </PrincipleText>
              </Principle>

              <Principle>
                <IconWrapper>
                  <Zap size={19} />
                </IconWrapper>

                <PrincipleTitle>
                  Continuous improvement
                </PrincipleTitle>

                <PrincipleText>
                  Learning, measuring, simplifying, and improving systems
                  continuously as products and teams grow.
                </PrincipleText>
              </Principle>
            </Principles>

            <Link href="#experience">
              Explore my experience
              <ArrowUpRight size={16} />
            </Link>
          </Main>
        </Content>
      </Container>
    </Section>
  )
}