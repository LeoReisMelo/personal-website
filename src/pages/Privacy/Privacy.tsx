import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container/Container";
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

export function Privacy() {
  return (
    <Document>
      <Container>
        <DocumentHeader>
          <IconWrapper>
            <ShieldCheck size={22} />
          </IconWrapper>

          <Eyebrow>Legal</Eyebrow>

          <Title>Privacy Policy</Title>

          <LastUpdated>Last updated: September 21, 2026</LastUpdated>

          <Text>
            Your privacy matters. This Privacy Policy explains how Leonardo Reis
            Melo collects, uses, and protects information when you use this
            website.
          </Text>

          <BackLink as={Link} to="/">
            <ArrowLeft size={16} />
            Back to website
          </BackLink>
        </DocumentHeader>

        <Section>
          <SectionTitle>1. Information We Collect</SectionTitle>

          <Text>
            We may collect information that you voluntarily provide when
            contacting us through this website, such as your name, email
            address, phone number, and the content of your message.
          </Text>

          <Text>
            We may also collect limited technical information required for the
            website to operate properly, such as browser type, device
            information, language preference, and basic usage information.
          </Text>
        </Section>

        <Section>
          <SectionTitle>2. How We Use Your Information</SectionTitle>

          <Text>
            Information provided through the website may be used to respond to
            inquiries, communicate about projects or professional opportunities,
            provide requested services, and improve the website and its user
            experience.
          </Text>

          <Text>
            We do not use personal information for purposes incompatible with
            the context in which it was collected.
          </Text>
        </Section>

        <Section>
          <SectionTitle>3. Cookies and Local Storage</SectionTitle>

          <Text>
            This website may use browser storage technologies, such as
            localStorage, to remember preferences such as language and theme
            selection.
          </Text>

          <Text>
            These preferences are used to provide a more consistent experience
            and are not intended to identify you personally.
          </Text>
        </Section>

        <Section>
          <SectionTitle>4. Third-Party Services</SectionTitle>

          <Text>
            The website may contain links to third-party services, including
            WhatsApp and professional or social platforms. When you follow these
            links, the privacy practices of the respective third party apply.
          </Text>

          <Text>
            We are not responsible for the privacy practices or content of
            external websites and services.
          </Text>
        </Section>

        <Section>
          <SectionTitle>5. Data Security</SectionTitle>

          <Text>
            Reasonable technical and organizational measures are used to protect
            information handled through this website against unauthorized
            access, loss, misuse, alteration, or disclosure.
          </Text>

          <Text>
            However, no method of transmission or electronic storage can be
            guaranteed to be completely secure.
          </Text>
        </Section>

        <Section>
          <SectionTitle>6. Your Rights</SectionTitle>

          <Text>
            Where applicable under Brazilian data protection legislation,
            including the Lei Geral de Proteção de Dados Pessoais (LGPD), you
            may have rights regarding your personal information, including
            access, correction, deletion, and information about how your data is
            processed.
          </Text>
        </Section>

        <Section>
          <SectionTitle>7. Contact</SectionTitle>

          <Text>
            If you have questions about this Privacy Policy or about the
            processing of your personal information, you can contact us at
            contato@leonardoreismelo.com.br.
          </Text>
        </Section>

        <Section>
          <SectionTitle>8. Changes to This Policy</SectionTitle>

          <Text>
            This Privacy Policy may be updated from time to time to reflect
            changes to the website, applicable legislation, or our privacy
            practices. The latest version will always be published on this page.
          </Text>
        </Section>
      </Container>
    </Document>
  );
}
