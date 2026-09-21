import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
} from 'lucide-react'
import styled from 'styled-components'

import { Container } from '../../components/Container/Container'

const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 8rem 0;
  overflow: hidden;
  background: var(--color-background-alt);
`

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const HeaderCopy = styled.div`
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

const Title = styled.h2`
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
  max-width: 600px;
  margin-top: 1.5rem;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
`

const ViewAll = styled.a`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 0.5rem;
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

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Project = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
  min-height: 500px;
  overflow: hidden;
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
    box-shadow: 0 24px 60px rgb(0 0 0 / 8%);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const ProjectVisual = styled.div`
  position: relative;
  min-height: 500px;
  overflow: hidden;
  background: var(--color-background);
  border-right: 1px solid var(--color-border);

  @media (max-width: 900px) {
    min-height: 380px;
    border-right: 0;
    border-bottom: 1px solid var(--color-border);
  }
`

const VisualGrid = styled.div`
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
  background-size: 56px 56px;
  opacity: 0.45;
`

const VisualGlow = styled.div`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: var(--color-brand);
  opacity: 0.1;
  filter: blur(90px);
`

const VisualWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: min(78%, 460px);
  transform: translate(-50%, -50%);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 30px 70px rgb(0 0 0 / 12%);
`

const WindowHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  height: 38px;
  padding: 0 1rem;
  border-bottom: 1px solid var(--color-border);
`

const WindowDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-border);
`

const WindowBody = styled.div`
  display: grid;
  min-height: 250px;
  grid-template-columns: 72px 1fr;
`

const WindowSidebar = styled.div`
  border-right: 1px solid var(--color-border);
  background: var(--color-background-alt);
`

const WindowMain = styled.div`
  padding: 1.5rem;
`

const WindowLine = styled.div<{ $width: string }>`
  width: ${({ $width }) => $width};
  height: 8px;
  margin-bottom: 0.75rem;
  border-radius: 999px;
  background: var(--color-border);
`

const WindowMetric = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 2rem;
`

const Metric = styled.div`
  min-height: 75px;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-background);
`

const MetricValue = styled.div`
  color: var(--color-text);
  font-size: 1.25rem;
  font-weight: 700;
`

const MetricLabel = styled.div`
  margin-top: 0.3rem;
  color: var(--color-text-muted);
  font-size: 0.65rem;
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;

  @media (max-width: 1100px) {
    padding: 3rem;
  }

  @media (max-width: 600px) {
    padding: 2rem;
  }
`

const ProjectNumber = styled.span`
  color: var(--color-brand);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`

const ProjectTitle = styled.h3`
  margin-top: 1rem;
  color: var(--color-text);
  font-size: clamp(1.75rem, 3vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.045em;
`

const ProjectDescription = styled.p`
  margin-top: 1.25rem;
  color: var(--color-text-muted);
  font-size: 0.95rem;
  line-height: 1.8;
`

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 2rem;
`

const Technology = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 0.7rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-background-alt);
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.65rem;
`

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 600;
  transition:
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    color: var(--color-brand);
    transform: translateY(-1px);
  }
`

const projects = [
  {
    number: '01',
    title: 'Aprendfy',
    description:
      'A SaaS platform designed around the real workflow of teachers, combining planning, reports, classroom organization, and AI-assisted productivity.',
    technologies: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'GCP',
    ],
    metricOne: 'SaaS',
    metricOneLabel: 'Product',
    metricTwo: 'AI',
    metricTwoLabel: 'Workflow',
  },
  {
    number: '02',
    title: 'Heloísa App',
    description:
      'A digital collaborator platform designed to help professionals organize tasks, information, communication, and everyday workflows.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'AI',
      'SaaS',
    ],
    metricOne: 'AI',
    metricOneLabel: 'Assistant',
    metricTwo: 'SaaS',
    metricTwoLabel: 'Platform',
  },
]

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Header>
          <HeaderCopy>
            <Eyebrow>
              <EyebrowDot />
              Selected work
            </Eyebrow>

            <Title>
              Things I&apos;ve
              <Highlight> built.</Highlight>
            </Title>

            <Description>
              A selection of products and engineering projects where
              architecture, product thinking, and software engineering
              come together.
            </Description>
          </HeaderCopy>

          <ViewAll href="#contact">
            Discuss a project
            <ArrowUpRight size={16} />
          </ViewAll>
        </Header>

        <ProjectsList>
          {projects.map((project) => (
            <Project key={project.number}>
              <ProjectVisual>
                <VisualGrid />
                <VisualGlow />

                <VisualWindow>
                  <WindowHeader>
                    <WindowDot />
                    <WindowDot />
                    <WindowDot />
                  </WindowHeader>

                  <WindowBody>
                    <WindowSidebar />

                    <WindowMain>
                      <WindowLine $width="35%" />
                      <WindowLine $width="70%" />
                      <WindowLine $width="55%" />

                      <WindowMetric>
                        <Metric>
                          <MetricValue>
                            {project.metricOne}
                          </MetricValue>

                          <MetricLabel>
                            {project.metricOneLabel}
                          </MetricLabel>
                        </Metric>

                        <Metric>
                          <MetricValue>
                            {project.metricTwo}
                          </MetricValue>

                          <MetricLabel>
                            {project.metricTwoLabel}
                          </MetricLabel>
                        </Metric>
                      </WindowMetric>
                    </WindowMain>
                  </WindowBody>
                </VisualWindow>
              </ProjectVisual>

              <ProjectContent>
                <ProjectNumber>
                  PROJECT / {project.number}
                </ProjectNumber>

                <ProjectTitle>{project.title}</ProjectTitle>

                <ProjectDescription>
                  {project.description}
                </ProjectDescription>

                <Technologies>
                  {project.technologies.map((technology) => (
                    <Technology key={technology}>
                      {technology}
                    </Technology>
                  ))}
                </Technologies>

                <ProjectLinks>
                  <ProjectLink href="#contact">
                    <Layers3 size={15} />
                    Case study
                  </ProjectLink>

                  <ProjectLink href="#contact">
                    <Code2 size={15} />
                    Source code
                  </ProjectLink>

                  <ProjectLink href="#contact">
                    <ExternalLink size={15} />
                    Live project
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </Project>
          ))}
        </ProjectsList>
      </Container>
    </Section>
  )
}