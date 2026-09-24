import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { useI18n } from "../../i18n/I18nProvider";
import {
  BackLink,
  Document,
  DocumentHeader,
  Eyebrow,
  IconWrapper,
  LastUpdated,
  Section,
  SectionTitle,
  Text,
  Title,
} from "./styles";

export function Terms() {
  const { t } = useI18n();

  return (
    <Document>
      <Container>
        <DocumentHeader>
          <IconWrapper aria-hidden="true">
            <FileText size={22} />
          </IconWrapper>

          <Eyebrow>{t.terms.eyebrow}</Eyebrow>

          <Title>{t.terms.title}</Title>

          <LastUpdated>{t.terms.lastUpdated}</LastUpdated>

          <BackLink as={Link} to="/">
            <ArrowLeft size={16} />
            {t.terms.backToWebsite}
          </BackLink>
        </DocumentHeader>

        <Section>
          <SectionTitle>{t.terms.sections.acceptance.title}</SectionTitle>

          <Text>{t.terms.sections.acceptance.paragraph1}</Text>
        </Section>

        <Section>
          <SectionTitle>{t.terms.sections.websiteUse.title}</SectionTitle>

          <Text>{t.terms.sections.websiteUse.paragraph1}</Text>

          <Text>{t.terms.sections.websiteUse.paragraph2}</Text>
        </Section>

        <Section>
          <SectionTitle>
            {t.terms.sections.intellectualProperty.title}
          </SectionTitle>

          <Text>{t.terms.sections.intellectualProperty.paragraph1}</Text>

          <Text>{t.terms.sections.intellectualProperty.paragraph2}</Text>
        </Section>

        <Section>
          <SectionTitle>{t.terms.sections.thirdParty.title}</SectionTitle>

          <Text>{t.terms.sections.thirdParty.paragraph1}</Text>
        </Section>

        <Section>
          <SectionTitle>{t.terms.sections.availability.title}</SectionTitle>

          <Text>{t.terms.sections.availability.paragraph1}</Text>
        </Section>

        <Section>
          <SectionTitle>{t.terms.sections.liability.title}</SectionTitle>

          <Text>{t.terms.sections.liability.paragraph1}</Text>
        </Section>

        <Section>
          <SectionTitle>{t.terms.sections.changes.title}</SectionTitle>

          <Text>{t.terms.sections.changes.paragraph1}</Text>
        </Section>

        <Section>
          <SectionTitle>{t.terms.sections.contact.title}</SectionTitle>

          <Text>{t.terms.sections.contact.paragraph1}</Text>
        </Section>
      </Container>
    </Document>
  );
}
