import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Container } from "../../components/Container/Container";
import { useI18n } from "../../i18n/I18nProvider";
import {
  Actions,
  Company,
  Content,
  Context,
  Description,
  ExperienceItem,
  Eyebrow,
  EyebrowDot,
  Header,
  Highlight,
  Intro,
  More,
  Period,
  ResumeLink,
  Role,
  Section,
  Timeline,
  TimelineDot,
  TimelineLine,
  Title,
} from "./styles";
import cvEnUs from "../../assets/resume/Resume Leonardo - 2026.pdf";
import cvPtBr from "../../assets/resume/Currículo Leonardo - 2026.pdf";
import type { Language } from "../../i18n/translations";

export function Experience() {
  const { t, language } = useI18n();

  const resumeByLanguage: Partial<Record<Language, string>> = {
    "pt-BR": cvPtBr,
    "en-US": cvEnUs,
  };

  const resumeUrl = resumeByLanguage[language];

  const positions = Object.entries(t.experience.positions)
    .map(([key, position]) => ({
      key,
      ...position,
    }))
    .reverse();

  return (
    <Section id="experience">
      <Container>
        <Content>
          <Intro>
            <Eyebrow>
              <EyebrowDot />
              {t.experience.eyebrow}
            </Eyebrow>
            <Title>
              {t.experience.title}{" "}
              <Highlight>{t.experience.highlight}</Highlight>
            </Title>
            <Description>{t.experience.description}</Description>
          </Intro>
          <Timeline>
            <TimelineLine />
            {positions.map((experience) => {
              const isCurrent = experience.key === "gft";
              return (
                <ExperienceItem key={experience.key}>
                  <TimelineDot $isCurrent={isCurrent} />
                  <Header>
                    <div>
                      <Role>{experience.role}</Role>
                      <Company>{experience.company}</Company>
                    </div>
                    <Period $isCurrent={isCurrent}>{experience.period}</Period>
                  </Header>
                  <Context>{experience.description}</Context>
                </ExperienceItem>
              );
            })}
            <Actions>
              <More href="#projects">
                {t.experience.action}
                <ArrowUpRight size={16} />
              </More>

              {resumeUrl && (
                <ResumeLink
                  href={resumeUrl}
                  download={`Leonardo-Reis-CV-${language}.pdf`}
                >
                  {t.experience.resume}
                  <ArrowDownToLine size={16} />
                </ResumeLink>
              )}
            </Actions>
          </Timeline>
        </Content>
      </Container>
    </Section>
  );
}
