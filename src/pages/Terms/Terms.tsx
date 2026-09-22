import { ArrowLeft, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '../../components/Container/Container'

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
} from './styles'

export function Terms() {
  return (
    <Document>
      <Container>
        <DocumentHeader>
          <IconWrapper aria-hidden="true">
            <FileText size={22} />
          </IconWrapper>

          <Eyebrow>
            Legal
          </Eyebrow>

          <Title>
            Terms of Service
          </Title>

          <LastUpdated>
            Last updated: September 21, 2026
          </LastUpdated>

          <BackLink as={Link} to="/">
            <ArrowLeft size={16} />
            Back to website
          </BackLink>
        </DocumentHeader>

        <Section>
          <SectionTitle>
            1. Acceptance of terms
          </SectionTitle>

          <Text>
            By accessing or using this website, you agree to be bound by these
            Terms of Service. If you do not agree with these terms, please do
            not use the website.
          </Text>

          <Text>
            These terms apply to visitors and users of the website operated by
            Leonardo Reis Melo.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            2. Use of the website
          </SectionTitle>

          <Text>
            You may use this website for lawful purposes and in accordance with
            these terms. You agree not to use the website in a way that could
            damage, disable, overburden, or interfere with its operation.
          </Text>

          <Text>
            You are responsible for ensuring that your use of the website
            complies with all applicable laws and regulations.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            3. Intellectual property
          </SectionTitle>

          <Text>
            Unless otherwise stated, the content of this website, including
            text, visual elements, branding, layout, graphics, and original
            materials, is owned by Leonardo Reis Melo or used with appropriate
            authorization.
          </Text>

          <Text>
            You may not reproduce, distribute, modify, or commercially exploit
            protected content from this website without prior authorization,
            except where permitted by applicable law.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            4. Professional services
          </SectionTitle>

          <Text>
            Information presented on this website is provided for general
            informational purposes. Any professional services, consulting,
            software development, or other engagements are subject to separate
            agreements that may establish specific terms, responsibilities,
            deliverables, fees, and conditions.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            5. External links
          </SectionTitle>

          <Text>
            This website may contain links to third-party websites or services.
            These links are provided for convenience and do not necessarily
            imply endorsement or responsibility for the content, availability,
            security, or practices of those third parties.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            6. Disclaimer
          </SectionTitle>

          <Text>
            The website is provided on an “as is” and “as available” basis.
            Reasonable efforts may be made to keep the information accurate and
            available, but no guarantee is made that the website will always be
            uninterrupted, error-free, complete, or current.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            7. Limitation of liability
          </SectionTitle>

          <Text>
            To the extent permitted by applicable law, Leonardo Reis Melo shall
            not be liable for indirect, incidental, special, or consequential
            damages arising from or related to the use of this website.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            8. Privacy
          </SectionTitle>

          <Text>
            Your use of this website is also subject to our Privacy Policy,
            which explains how personal information may be collected, used,
            stored, and protected.
          </Text>

          <Text>
            You can access the Privacy Policy through the website footer.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            9. Changes to these terms
          </SectionTitle>

          <Text>
            These Terms of Service may be updated from time to time to reflect
            changes to the website, services, legal requirements, or business
            practices.
          </Text>

          <Text>
            When changes are made, the updated version will be published on this
            page together with the corresponding revision date.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            10. Governing law
          </SectionTitle>

          <Text>
            These terms shall be interpreted in accordance with the applicable
            laws of Brazil, without prejudice to mandatory consumer or other
            legal protections that may apply.
          </Text>
        </Section>

        <Section>
          <SectionTitle>
            11. Contact
          </SectionTitle>

          <Text>
            If you have questions regarding these Terms of Service, you can
            contact Leonardo Reis Melo through the contact information
            available on this website.
          </Text>
        </Section>
      </Container>
    </Document>
  )
}