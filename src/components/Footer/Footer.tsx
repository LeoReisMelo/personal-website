import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link as ReactLink } from "react-router-dom";
import { Container } from "../Container/Container";
import {
  BackToTop,
  Bottom,
  BottomContent,
  BottomLink,
  BottomLinks,
  Brand,
  BrandColumn,
  BrandDescription,
  BrandName,
  Column,
  ColumnTitle,
  CompanyInfo,
  CompanyLabel,
  CompanyValue,
  ContactItem,
  ContactList,
  Copyright,
  FooterElement,
  Grid,
  Heart,
  Link,
  Links,
  LogoMark,
  MadeWith,
  Main,
} from "./styles";
import { CONTACT } from "../../sections/Contact/Contact";
import { useI18n } from "../../i18n/I18nProvider";

export function Footer() {
  const { t } = useI18n();

  return (
    <FooterElement>
      <Main>
        <Container>
          <Grid>
            <BrandColumn>
              <Brand href="#home" aria-label="Leonardo Reis Melo">
                <LogoMark>LR</LogoMark>
                <BrandName>Leonardo Reis Melo</BrandName>
              </Brand>
              <BrandDescription>{t.footer.description}</BrandDescription>
              <MadeWith>
                {t.footer.builtWith.split(" ♥ ")[0]}
                <Heart aria-hidden="true">♥</Heart>
                {t.footer.builtWith.split(" ♥ ")[1]}
              </MadeWith>
            </BrandColumn>
            <Column>
              <ColumnTitle>{t.footer.navigation}</ColumnTitle>
              <Links aria-label={t.footer.navigation}>
                <Link href="#about">{t.navigation.about}</Link>
                <Link href="#experience">{t.navigation.experience}</Link>
                <Link href="#projects">{t.navigation.projects}</Link>
                <Link href="#expertise">{t.navigation.expertise}</Link>
                <Link href="#services">{t.navigation.services}</Link>
                <Link href="#contact">{t.navigation.contact}</Link>
              </Links>
            </Column>
            <Column>
              <ColumnTitle>{t.footer.contact}</ColumnTitle>
              <ContactList>
                <ContactItem href={`mailto:${CONTACT.email}`}>
                  <Mail size={15} />
                  {CONTACT.email}
                </ContactItem>
                <ContactItem href={`tel:${CONTACT.phone}`}>
                  <Phone size={15} />
                  {CONTACT.phone}
                </ContactItem>
                <ContactItem href="#contact">
                  <MapPin size={15} />
                  {t.footer.brazil}
                </ContactItem>
              </ContactList>
            </Column>
            <Column>
              <ColumnTitle>{t.footer.company}</ColumnTitle>
              <CompanyInfo>
                <CompanyLabel>{t.footer.company}</CompanyLabel>
                <CompanyValue>Leonardo Reis Melo Limitada</CompanyValue>
                <CompanyLabel>{t.footer.cnpj}</CompanyLabel>
                <CompanyValue>55.696.039/0001-87</CompanyValue>
              </CompanyInfo>
            </Column>
          </Grid>
        </Container>
      </Main>
      <Bottom>
        <Container>
          <BottomContent>
            <Copyright>
              © {new Date().getFullYear()} Leonardo Reis Melo.{" "}
              {t.footer.copyright}
            </Copyright>
            <BottomLinks>
              <BottomLink as={ReactLink} to="/privacy">
                {t.footer.privacy}
              </BottomLink>
              <BottomLink as={ReactLink} to="/terms">
                {t.footer.terms}
              </BottomLink>
              <BackToTop href="#home">
                {t.footer.backToTop}
                <ArrowUpRight size={12} />
              </BackToTop>
            </BottomLinks>
          </BottomContent>
        </Container>
      </Bottom>
    </FooterElement>
  );
}
