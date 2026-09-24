import { ArrowUpRight, Code2, Layers3, Server, Zap } from "lucide-react";
import { Container } from "../../components/Container/Container";
import { useI18n } from "../../i18n/I18nProvider";
import {
  Content,
  Eyebrow,
  EyebrowDot,
  Highlight,
  IconWrapper,
  Intro,
  Lead,
  Link,
  Main,
  Paragraph,
  Principle,
  Principles,
  PrincipleText,
  PrincipleTitle,
  Section,
  SectionLine,
  Stat,
  StatLabel,
  Stats,
  StatValue,
  Title,
} from "./styles";

export function About() {
  const { t } = useI18n();

  return (
    <Section id="about">
      <SectionLine />
      <Container>
        <Content>
          <Intro>
            <Eyebrow>
              <EyebrowDot />
              {t.about.eyebrow}
            </Eyebrow>
            <Title>
              {t.about.title} <Highlight>{t.about.highlight}</Highlight>
            </Title>
          </Intro>
          <Main>
            <Lead>{t.about.lead}</Lead>
            {t.about.paragraphs.map((paragraph) => (
              <Paragraph key={paragraph}>{paragraph}</Paragraph>
            ))}
            <Stats>
              <Stat>
                <StatValue>{t.about.stats.senior}</StatValue>
                <StatLabel>{t.about.stats.seniorLabel}</StatLabel>
              </Stat>
              <Stat>
                <StatValue>{t.about.stats.backend}</StatValue>
                <StatLabel>{t.about.stats.backendLabel}</StatLabel>
              </Stat>
              <Stat>
                <StatValue>{t.about.stats.cloud}</StatValue>
                <StatLabel>{t.about.stats.cloudLabel}</StatLabel>
              </Stat>
            </Stats>
            <Principles>
              <Principle>
                <IconWrapper>
                  <Server size={19} />
                </IconWrapper>
                <PrincipleTitle>
                  {t.about.principles.backend.title}
                </PrincipleTitle>
                <PrincipleText>
                  {t.about.principles.backend.description}
                </PrincipleText>
              </Principle>
              <Principle>
                <IconWrapper>
                  <Code2 size={19} />
                </IconWrapper>
                <PrincipleTitle>
                  {t.about.principles.engineering.title}
                </PrincipleTitle>
                <PrincipleText>
                  {t.about.principles.engineering.description}
                </PrincipleText>
              </Principle>
              <Principle>
                <IconWrapper>
                  <Layers3 size={19} />
                </IconWrapper>
                <PrincipleTitle>
                  {t.about.principles.architecture.title}
                </PrincipleTitle>
                <PrincipleText>
                  {t.about.principles.architecture.description}
                </PrincipleText>
              </Principle>
              <Principle>
                <IconWrapper>
                  <Zap size={19} />
                </IconWrapper>
                <PrincipleTitle>
                  {t.about.principles.delivery.title}
                </PrincipleTitle>
                <PrincipleText>
                  {t.about.principles.delivery.description}
                </PrincipleText>
              </Principle>
            </Principles>
            <Link href="#experience">
              {t.about.action}
              <ArrowUpRight size={16} />
            </Link>
          </Main>
        </Content>
      </Container>
    </Section>
  );
}
