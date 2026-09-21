import {
  ArrowUpRight,
  Boxes,
  CloudCog,
  Code2,
  Rocket,
} from 'lucide-react'
import styled from 'styled-components'

import { Container } from '../../components/Container/Container'

const Section = styled.section`
  width: 100%;
  padding: 9rem 0;
  background: var(--color-background);
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
  max-width: 700px;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.article`
  position: relative;
  min-height: 360px;
  overflow: hidden;
  padding: 2.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  transition:
    border-color var(--transition-normal),
    transform var(--transition-normal),
    box-shadow var(--transition-normal);

  &:hover {
    border-color: var(--color-border-hover);
    transform: translateY(-4px);
    box-shadow: 0 24px 70px rgb(0 0 0 / 8%);
  }
`

const BackgroundNumber = styled.span`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 7rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0.035;
  user-select: none;
`

const Glow = styled.div`
  position: absolute;
  right: -100px;
  bottom: -120px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: var(--color-brand);
  opacity: 0;
  filter: blur(100px);
  transition: opacity var(--transition-normal);
  pointer-events: none;

  ${ServiceCard}:hover & {
    opacity: 0.08;
  }
`

const Icon = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: 14px;
  background: var(--color-background);
  color: var(--color-brand);
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  margin-top: 5rem;
`

const ServiceTitle = styled.h3`
  color: var(--color-text);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.035em;
`

const ServiceDescription = styled.p`
  max-width: 520px;
  margin-top: 0.9rem;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.75;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`

const ListItem = styled.li`
  padding: 0.4rem 0.7rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: 0.62rem;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 1rem;
  padding: 2rem 2.25rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-background-alt);

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const BottomText = styled.div`
  max-width: 650px;
`

const BottomTitle = styled.h3`
  color: var(--color-text);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`

const BottomDescription = styled.p`
  margin-top: 0.5rem;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  line-height: 1.7;
`

const ContactButton = styled.a`
  display: inline-flex;
  height: 46px;
  flex-shrink: 0;
  align-items: center;
  gap: 0.55rem;
  padding: 0 1.15rem;
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
    transform: translateY(-2px);
  }
`

const services = [
  {
    number: '01',
    title: 'Backend Development',
    description:
      'Design and implementation of robust backend systems, APIs, integrations, and business logic for new or existing products.',
    items: [
      'Node.js',
      'NestJS',
      'TypeScript',
      'REST',
      'GraphQL',
    ],
    icon: Code2,
  },
  {
    number: '02',
    title: 'Software Architecture',
    description:
      'Technical design for systems that need clearer boundaries, better maintainability, and a foundation for future growth.',
    items: [
      'System Design',
      'Clean Architecture',
      'DDD',
      'Microservices',
    ],
    icon: Boxes,
  },
  {
    number: '03',
    title: 'Cloud & Infrastructure',
    description:
      'Cloud architecture and application infrastructure focused on reliable deployments, scalability, and operational simplicity.',
    items: [
      'AWS',
      'GCP',
      'Azure',
      'Docker',
      'CI/CD',
    ],
    icon: CloudCog,
  },
  {
    number: '04',
    title: 'Technical Consulting',
    description:
      'Hands-on technical support for teams facing architectural decisions, legacy systems, technical debt, or complex engineering problems.',
    items: [
      'Technical Strategy',
      'Code Review',
      'Technical Debt',
      'System Evolution',
    ],
    icon: Rocket,
  },
]

export function Services() {
  return (
    <Section id="services">
      <Container>
        <Header>
          <div>
            <Eyebrow>
              <EyebrowLine />
              Services
            </Eyebrow>

            <Title>
              Engineering support
              <br />
              for real products.
            </Title>
          </div>

          <Description>
            I work with companies and teams that need hands-on
            engineering to build, evolve, or solve complex software
            systems.
          </Description>
        </Header>

        <ServicesGrid>
          {services.map(
            ({
              number,
              title,
              description,
              items,
              icon: IconComponent,
            }) => (
              <ServiceCard key={title}>
                <BackgroundNumber>{number}</BackgroundNumber>
                <Glow />

                <Icon>
                  <IconComponent size={22} />
                </Icon>

                <Content>
                  <ServiceTitle>{title}</ServiceTitle>

                  <ServiceDescription>
                    {description}
                  </ServiceDescription>

                  <List>
                    {items.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </List>
                </Content>
              </ServiceCard>
            ),
          )}
        </ServicesGrid>

        <Bottom>
          <BottomText>
            <BottomTitle>
              Have a technical challenge to solve?
            </BottomTitle>

            <BottomDescription>
              Tell me what you are building, where you are today,
              and what needs to change. We can start from the
              problem.
            </BottomDescription>
          </BottomText>

          <ContactButton href="#contact">
            Start a conversation
            <ArrowUpRight size={16} />
          </ContactButton>
        </Bottom>
      </Container>
    </Section>
  )
}