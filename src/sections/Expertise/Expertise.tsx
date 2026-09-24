import {
  Cloud,
  Code2,
  Database,
  Layers3,
  LockKeyhole,
  Server,
} from "lucide-react";

import { FaAws } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";

import {
  SiDocker,
  SiGithubactions,
  SiGooglecloud,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";

import type { IconType } from "react-icons";

import { Container } from "../../components/Container/Container";

import { useI18n } from "../../i18n/I18nProvider";

import {
  Card,
  CardContent,
  CardDescription,
  CardGlow,
  CardHeader,
  CardTitle,
  Description,
  Eyebrow,
  EyebrowDot,
  Grid,
  Header,
  Highlight,
  Icon,
  Number,
  Section,
  Technologies,
  Technology,
  Title,
} from "./styles";

type ExpertiseKey =
  | "backend"
  | "cloud"
  | "data"
  | "architecture"
  | "frontend"
  | "security";

type Technology = {
  label: string;
  icon: IconType;
  color: string;
  showLabel?: boolean;
};

type ExpertiseItem = {
  number: string;
  key: ExpertiseKey;
  icon: IconType;
  technologies: Technology[];
};

const expertise: ExpertiseItem[] = [
  {
    number: "01",
    key: "backend",
    icon: Server,
    technologies: [
      {
        label: "Node.js",
        icon: SiNodedotjs,
        color: "#5FA04E",
      },
      {
        label: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
      },
      {
        label: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        label: "REST",
        icon: Server,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
      {
        label: "GraphQL",
        icon: SiGraphql,
        color: "#E10098",
      },
    ],
  },
  {
    number: "02",
    key: "cloud",
    icon: Cloud,
    technologies: [
      {
        label: "AWS",
        icon: FaAws,
        color: "#FF9900",
      },
      {
        label: "GCP",
        icon: SiGooglecloud,
        color: "#4285F4",
      },
      {
        label: "Azure",
        icon: VscAzureDevops,
        color: "#0078D4",
      },
      {
        label: "Docker",
        icon: SiDocker,
        color: "#2496ED",
      },
      {
        label: "GitHub Actions",
        icon: SiGithubactions,
        color: "#2088FF",
      },
    ],
  },
  {
    number: "03",
    key: "data",
    icon: Database,
    technologies: [
      {
        label: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
      },
      {
        label: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        label: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
      },
      {
        label: "DynamoDB",
        icon: FaAws,
        color: "#FF9900",
      },
    ],
  },
  {
    number: "04",
    key: "architecture",
    icon: Layers3,
    technologies: [
      {
        label: "Clean Architecture",
        icon: Layers3,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
      {
        label: "DDD",
        icon: Layers3,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
      {
        label: "Microservices",
        icon: Layers3,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
      {
        label: "Distributed Systems",
        icon: Layers3,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
    ],
  },
  {
    number: "05",
    key: "frontend",
    icon: Code2,
    technologies: [
      {
        label: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        label: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        label: "Vite",
        icon: SiVite,
        color: "#646CFF",
      },
      {
        label: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
    ],
  },
  {
    number: "06",
    key: "security",
    icon: LockKeyhole,
    technologies: [
      {
        label: "Authentication",
        icon: LockKeyhole,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
      {
        label: "Authorization",
        icon: LockKeyhole,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
      {
        label: "Testing",
        icon: Code2,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
      {
        label: "Observability",
        icon: Server,
        color: "var(--color-text-secondary)",
        showLabel: true,
      },
    ],
  },
];

export function Expertise() {
  const { t } = useI18n();

  return (
    <Section id="expertise">
      <Container>
        <Header>
          <div>
            <Eyebrow>
              <EyebrowDot />
              {t.expertise.eyebrow}
            </Eyebrow>

            <Title>
              {t.expertise.title} <Highlight>{t.expertise.highlight}</Highlight>
            </Title>
          </div>

          <Description>{t.expertise.description}</Description>
        </Header>

        <Grid>
          {expertise.map(
            ({ number, key, technologies, icon: IconComponent }) => (
              <Card key={key}>
                <CardGlow />

                <CardHeader>
                  <Icon>
                    <IconComponent size={21} />
                  </Icon>

                  <Number>{number}</Number>
                </CardHeader>

                <CardContent>
                  <CardTitle>{t.expertise.items[key].title}</CardTitle>

                  <CardDescription>
                    {t.expertise.items[key].description}
                  </CardDescription>

                  <Technologies>
                    {technologies.map(
                      ({ label, icon: TechnologyIcon, color, showLabel }) => (
                        <Technology
                          key={label}
                          title={label}
                          aria-label={label}
                          $color={color}
                          $showLabel={showLabel}
                        >
                          <TechnologyIcon size={16} />

                          {showLabel && <span>{label}</span>}
                        </Technology>
                      ),
                    )}
                  </Technologies>
                </CardContent>
              </Card>
            ),
          )}
        </Grid>
      </Container>
    </Section>
  );
}
