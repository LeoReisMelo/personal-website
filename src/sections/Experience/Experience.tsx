import { ArrowUpRight } from "lucide-react";
import styled from "styled-components";

import { Container } from "../../components/Container/Container";
import { useI18n } from "../../i18n/I18nProvider";

const Section = styled.section`
  position: relative;
  width: 100%;
  padding: 8rem 0;
  background: var(--color-background);
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(260px, 0.65fr) minmax(0, 1.35fr);
  gap: 6rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const Intro = styled.div`
  position: sticky;
  top: 120px;

  @media (max-width: 900px) {
    position: static;
  }
`;

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
`;

const EyebrowDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-brand);
  box-shadow: 0 0 0 5px var(--color-brand-soft);
`;

const Title = styled.h2`
  max-width: 520px;
  color: var(--color-text);
  font-size: clamp(2.75rem, 5vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.06em;
  line-height: 0.98;
`;

const Description = styled.p`
  max-width: 460px;
  margin-top: 1.75rem;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
`;

const Timeline = styled.div`
  position: relative;
`;

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
`;

const ExperienceItem = styled.article`
  position: relative;
  padding-left: 3rem;

  &:not(:last-child) {
    padding-bottom: 4rem;
  }

  @media (max-width: 600px) {
    padding-left: 2rem;
  }
`;

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
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Role = styled.h3`
  color: var(--color-text);
  font-size: 1.35rem;
  font-weight: 650;
  letter-spacing: -0.025em;
`;

const Company = styled.p`
  margin-top: 0.35rem;
  color: var(--color-brand);
  font-size: 0.9rem;
  font-weight: 600;
`;

const Period = styled.span`
  flex-shrink: 0;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const Context = styled.p`
  margin-top: 1.5rem;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;
`;

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
`;

export function Experience() {
  const { t } = useI18n();

  const positions = Object.values(t.experience.positions);

  return (
    <Section id="experience">
      <Container>
        <Content>
          <Intro>
            <Eyebrow>
              <EyebrowDot />
              {t.experience.eyebrow}
            </Eyebrow>

            <Title>{t.experience.title}</Title>

            <Description>{t.experience.description}</Description>
          </Intro>

          <Timeline>
            <TimelineLine />

            {positions.map((experience) => (
              <ExperienceItem key={`${experience.company}-${experience.role}`}>
                <TimelineDot />

                <Header>
                  <div>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                  </div>

                  <Period>
                    {experience.company === "Elastic Code"
                      ? t.experience.freelance
                      : t.experience.previous}
                  </Period>
                </Header>

                <Context>{experience.description}</Context>
              </ExperienceItem>
            ))}

            <More href="#projects">
              {t.experience.action}
              <ArrowUpRight size={16} />
            </More>
          </Timeline>
        </Content>
      </Container>
    </Section>
  );
}
