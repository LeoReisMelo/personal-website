import {
  Cloud,
  Code2,
  Database,
  Layers3,
  LockKeyhole,
  Server,
} from 'lucide-react'
import styled from 'styled-components'

import { Container } from '../../components/Container/Container'

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
  margin-bottom: 1.25rem;
  color: var(--color-brand);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const EyebrowLine = styled.span`
  width: 28px;
  height: 1px;
  background: var(--color-brand);
`

const Title = styled.h2`
  max-width: 650px;
  color: var(--color-text);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.055em;
  line-height: 0.98;
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
  gap: 0.4rem;
  margin-top: 1.25rem;
`

const Technology = styled.span`
  padding: 0.35rem 0.6rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.62rem;
`

const expertise = [
  {
    number: '01',
    title: 'Backend Engineering',
    description:
      'Building reliable APIs and backend systems with a focus on maintainability, performance, and clear boundaries.',
    technologies: ['Node.js', 'NestJS', 'TypeScript', 'REST', 'GraphQL'],
    icon: Server,
  },
  {
    number: '02',
    title: 'Cloud & Infrastructure',
    description:
      'Designing and operating cloud-based applications with scalable infrastructure and production-ready environments.',
    technologies: ['AWS', 'GCP', 'Azure', 'Docker', 'CI/CD'],
    icon: Cloud,
  },
  {
    number: '03',
    title: 'Data & Persistence',
    description:
      'Working with relational and NoSQL databases according to the consistency, querying, and scalability needs of each system.',
    technologies: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'DynamoDB',
    ],
    icon: Database,
  },
  {
    number: '04',
    title: 'Software Architecture',
    description:
      'Designing systems around clear responsibilities, modularity, evolution, and business requirements.',
    technologies: [
      'Clean Architecture',
      'DDD',
      'Microservices',
      'Distributed Systems',
    ],
    icon: Layers3,
  },
  {
    number: '05',
    title: 'Frontend Engineering',
    description:
      'Building modern interfaces when the product requires full-stack ownership and close integration with backend systems.',
    technologies: ['React', 'TypeScript', 'Vite', 'JavaScript'],
    icon: Code2,
  },
  {
    number: '06',
    title: 'Security & Reliability',
    description:
      'Applying engineering practices that make applications safer, observable, testable, and easier to operate.',
    technologies: [
      'Authentication',
      'Authorization',
      'Testing',
      'Observability',
    ],
    icon: LockKeyhole,
  },
]

export function Expertise() {
  return (
    <Section id="expertise">
      <Container>
        <Header>
          <div>
            <Eyebrow>
              <EyebrowLine />
              Technical expertise
            </Eyebrow>

            <Title>
              Engineering across
              <br />
              the stack.
            </Title>
          </div>

          <Description>
            My work sits primarily around backend engineering and
            distributed systems, with experience across cloud,
            databases, architecture, frontend, and production
            environments.
          </Description>
        </Header>

        <Grid>
          {expertise.map(
            ({
              number,
              title,
              description,
              technologies,
              icon: IconComponent,
            }) => (
              <Card key={title}>
                <CardGlow />

                <CardHeader>
                  <Icon>
                    <IconComponent size={21} />
                  </Icon>

                  <Number>{number}</Number>
                </CardHeader>

                <CardContent>
                  <CardTitle>{title}</CardTitle>

                  <CardDescription>
                    {description}
                  </CardDescription>

                  <Technologies>
                    {technologies.map((technology) => (
                      <Technology key={technology}>
                        {technology}
                      </Technology>
                    ))}
                  </Technologies>
                </CardContent>
              </Card>
            ),
          )}
        </Grid>
      </Container>
    </Section>
  )
}