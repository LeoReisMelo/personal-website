import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import { useI18n } from '../../i18n/I18nProvider';
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
} from './styles';

export function Privacy() {
  const { t } = useI18n();

  return (
    <Document>
      <Container>
        <DocumentHeader>
          <IconWrapper>
            <ShieldCheck size={22} />
          </IconWrapper>
          <Eyebrow>{t.privacy.eyebrow}</Eyebrow>
          <Title>{t.privacy.title}</Title>
          <LastUpdated>{t.privacy.lastUpdated}</LastUpdated>
          <Text>{t.privacy.introduction}</Text>
          <BackLink as={Link} to="/">
            <ArrowLeft size={16} />
            {t.privacy.backToWebsite}
          </BackLink>
        </DocumentHeader>
        <Section>
          <SectionTitle>{t.privacy.sections.information.title}</SectionTitle>
          <Text>{t.privacy.sections.information.paragraph1}</Text>
          <Text>{t.privacy.sections.information.paragraph2}</Text>
        </Section>
        <Section>
          <SectionTitle>{t.privacy.sections.usage.title}</SectionTitle>
          <Text>{t.privacy.sections.usage.paragraph1}</Text>
          <Text>{t.privacy.sections.usage.paragraph2}</Text>
        </Section>
        <Section>
          <SectionTitle>{t.privacy.sections.cookies.title}</SectionTitle>
          <Text>{t.privacy.sections.cookies.paragraph1}</Text>
          <Text>{t.privacy.sections.cookies.paragraph2}</Text>
        </Section>
        <Section>
          <SectionTitle>{t.privacy.sections.thirdParty.title}</SectionTitle>
          <Text>{t.privacy.sections.thirdParty.paragraph1}</Text>
          <Text>{t.privacy.sections.thirdParty.paragraph2}</Text>
        </Section>
        <Section>
          <SectionTitle>{t.privacy.sections.security.title}</SectionTitle>
          <Text>{t.privacy.sections.security.paragraph1}</Text>
          <Text>{t.privacy.sections.security.paragraph2}</Text>
        </Section>
        <Section>
          <SectionTitle>{t.privacy.sections.rights.title}</SectionTitle>
          <Text>{t.privacy.sections.rights.paragraph1}</Text>
        </Section>
        <Section>
          <SectionTitle>{t.privacy.sections.contact.title}</SectionTitle>
          <Text>{t.privacy.sections.contact.paragraph1}</Text>
        </Section>
        <Section>
          <SectionTitle>{t.privacy.sections.changes.title}</SectionTitle>
          <Text>{t.privacy.sections.changes.paragraph1}</Text>
        </Section>
      </Container>
    </Document>
  );
}