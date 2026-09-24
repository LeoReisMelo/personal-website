import { ArrowDown, ArrowUpRight } from 'lucide-react'
import profilePhoto from '../../assets/perfil.jpg'
import { Container } from '../../components/Container/Container'
import { useI18n } from '../../i18n/I18nProvider'
import { Actions, Content, Copy, Description, Eyebrow, EyebrowDot, Glow, Grid, Highlight, Photo, PhotoFrame, PhotoGlow, PrimaryButton, ScrollIndicator, SecondaryButton, Section, Title, Visual } from './styles'



export function Hero() {
  const { t } = useI18n()

  return (
    <Section id="home">
      <Grid />
      <Glow />
      <Container>
        <Content>
          <Copy>
            <Eyebrow>
              <EyebrowDot />
              {t.hero.eyebrow}
            </Eyebrow>
            <Title>
              {t.hero.title}{' '}
              <Highlight>{t.hero.highlight}</Highlight>
            </Title>
            <Description>
              {t.hero.description}
            </Description>
            <Actions>
              <PrimaryButton href="#projects">
                {t.hero.primaryAction}
                <ArrowUpRight size={17} />
              </PrimaryButton>
              <SecondaryButton href="#contact">
                {t.hero.secondaryAction}
              </SecondaryButton>
            </Actions>
          </Copy>
          <Visual>
            <PhotoGlow />
            <PhotoFrame>
              <Photo
                src={profilePhoto}
                alt={t.hero.photoAlt}
              />
            </PhotoFrame>
          </Visual>
        </Content>
      </Container>
      <ScrollIndicator href="#about">
        {t.hero.scroll}
        <ArrowDown size={14} />
      </ScrollIndicator>
    </Section>
  )
}