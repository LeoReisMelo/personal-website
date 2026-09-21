import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'
import styled from 'styled-components'

import { Container } from '../../components/Container/Container'

const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 8rem 0;
  background: var(--color-background);
`

const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.65fr) minmax(0, 1.35fr);
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
  max-width: 520px;
  color: var(--color-text);
  font-size: clamp(2.75rem, 5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.06em;
  line-height: 0.98;
`

const Highlight = styled.span`
  color: var(--color-brand);
`

const Description = styled.p`
  max-width: 460px;
  margin-top: 1.75rem;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
`

const Timeline = styled.div`
  position: relative;
`

const TimelineLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 7px;
  width: 1px;
  background: var(--color-border);

  @media (max-width: 600px) {
    left: 5px;
  }
`

const ExperienceItem = styled.article`
  position: relative;
  padding-left: 3rem;

  &:not(:last-child) {
    padding-bottom: 4rem;
  }

  @media (max-width: 600px) {
    padding-left: 2rem;
  }
`

const TimelineDot = styled.span`
  position: absolute;
  top: 0.35rem;
  left: 0;
  width: 15px;
  height: 15px;
  border: 3px solid var(--color-background);
  border-radius: 50%;
  background: var(--color-brand);
  box-shadow: 0 0 0 1px var(--color-brand);
`

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`

const Role = styled.h3`
  color: var(--color-text);
  font-size: 1.35rem;
  font-weight: 650;
  letter-spacing: -0.025em;
`

const Company = styled.p`
  margin-top: 0.35rem;
  color: var(--color-brand);
  font-size: 0.9rem;
  font-weight: 600;
`

const Period = styled.span`
  flex-shrink: 0;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

const Context = styled.p`
  margin-top: 1.5rem;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;
`

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`

const Technology = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 0.7rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.65rem;
`

const More = styled.a`
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
`

const ExperienceIcon = styled.div`
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  color: var(--color-brand);
`

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Elastic Code',
    period: 'Freelance',
    context:
      'Worked on software products from the ground up, including backend architecture, APIs, databases, cloud infrastructure, and frontend integrations.',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'AWS',
      'React',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Telesena Virtual',
    period: 'Previous experience',
    context:
      'Worked on backend systems and APIs while contributing to the evolution and maintenance of an existing production platform.',
    technologies: [
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'TypeScript',
      'REST',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'EDGE',
    period: 'Previous experience',
    context:
      'Developed backend services and integrations for systems in the energy distribution domain, working with cloud infrastructure and NoSQL data.',
    technologies: [
      'NestJS',
      'Node.js',
      'MongoDB',
      'Azure',
      'Docker',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Carro Fácil / Porto Bank',
    period: 'Previous experience',
    context:
      'Worked on backend services and distributed systems in a large-scale financial and mobility ecosystem, contributing to APIs, microservices, asynchronous processing, and cloud infrastructure.',
    technologies: [
      'Node.js',
      'MongoDB',
      'SQL',
      'GCP',
      'Docker',
      'Cloud Tasks',
    ],
  },
]

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Content>
          <Intro>
            <ExperienceIcon>
              <BriefcaseBusiness size={20} />
            </ExperienceIcon>

            <Eyebrow>
              <EyebrowDot />
              Experience
            </Eyebrow>

            <Title>
              Experience that
              <Highlight> shaped how I build.</Highlight>
            </Title>

            <Description>
              A journey through backend engineering, product development,
              cloud infrastructure, and systems that operate in the real
              world.
            </Description>
          </Intro>

          <Timeline>
            <TimelineLine />

            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.role}`}
              >
                <TimelineDot />

                <Header>
                  <div>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                  </div>

                  <Period>{experience.period}</Period>
                </Header>

                <Context>{experience.context}</Context>

                <Technologies>
                  {experience.technologies.map((technology) => (
                    <Technology key={technology}>
                      {technology}
                    </Technology>
                  ))}
                </Technologies>
              </ExperienceItem>
            ))}

            <More href="#projects">
              See the projects behind my experience
              <ArrowUpRight size={16} />
            </More>
          </Timeline>
        </Content>
      </Container>
    </Section>
  )
}