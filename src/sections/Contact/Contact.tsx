import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../../components/Container/Container";
import { useI18n } from "../../i18n/I18nProvider";
import {
  Actions,
  BackgroundGrid,
  Content,
  Description,
  Detail,
  DetailContent,
  DetailIcon,
  DetailLabel,
  Details,
  DetailValue,
  Eyebrow,
  EyebrowDot,
  Glow,
  Header,
  Highlight,
  PrimaryButton,
  SecondaryButton,
  Section,
  Title,
} from "./styles";
import { GithubIcon } from "../../assets/icons/GitHubIcon";
import { LinkedinIcon } from "../../assets/icons/LinkedInIcon";
import { InstagramIcon } from "../../assets/icons/InstagramIcon";
import { CONTACT } from "../../utils/constants/contacts";

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact">
      <BackgroundGrid />
      <Glow />
      <Container>
        <Content>
          <Header>
            <Eyebrow>
              <EyebrowDot />
              {t.contact.eyebrow}
            </Eyebrow>
            <Title>
              {t.contact.title}
              <Highlight>{t.contact.highlight}</Highlight>
            </Title>
            <Description>{t.contact.description}</Description>
            <Actions>
              <PrimaryButton href={`mailto:${CONTACT.email}`}>
                {t.contact.sendEmail}
                <ArrowUpRight size={17} />
              </PrimaryButton>
              <SecondaryButton href="#home">
                {t.contact.backToTop}
              </SecondaryButton>
            </Actions>
          </Header>
          <Details>
            <Detail href={`mailto:${CONTACT.email}`}>
              <DetailIcon>
                <Mail size={19} />
              </DetailIcon>
              <DetailContent>
                <DetailLabel>{t.contact.details.email.label}</DetailLabel>
                <DetailValue>{CONTACT.email}</DetailValue>
              </DetailContent>
            </Detail>
            <Detail href={`tel:${CONTACT.phone}`}>
              <DetailIcon>
                <Phone size={19} />
              </DetailIcon>
              <DetailContent>
                <DetailLabel>{t.contact.details.phone.label}</DetailLabel>
                <DetailValue>{CONTACT.phone}</DetailValue>
              </DetailContent>
            </Detail>
            <Detail href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              <DetailIcon>
                <LinkedinIcon />
              </DetailIcon>
              <DetailContent>
                <DetailLabel>{t.contact.details.linkedin.label}</DetailLabel>
                <DetailValue>{t.contact.details.linkedin.value}</DetailValue>
              </DetailContent>
            </Detail>
            <Detail href={CONTACT.github} target="_blank" rel="noreferrer">
              <DetailIcon>
                <GithubIcon />
              </DetailIcon>
              <DetailContent>
                <DetailLabel>{t.contact.details.github.label}</DetailLabel>
                <DetailValue>{t.contact.details.github.value}</DetailValue>
              </DetailContent>
            </Detail>
            <Detail href={CONTACT.instagram} target="_blank" rel="noreferrer">
              <DetailIcon>
                <InstagramIcon />
              </DetailIcon>
              <DetailContent>
                <DetailLabel>{t.contact.details.instagram.label}</DetailLabel>
                <DetailValue>{t.contact.details.instagram.value}</DetailValue>
              </DetailContent>
            </Detail>
            <Detail href="#contact">
              <DetailIcon>
                <MapPin size={19} />
              </DetailIcon>
              <DetailContent>
                <DetailLabel>{t.contact.details.location.label}</DetailLabel>
                <DetailValue>{t.contact.details.location.value}</DetailValue>
              </DetailContent>
            </Detail>
          </Details>
        </Content>
      </Container>
    </Section>
  );
}
