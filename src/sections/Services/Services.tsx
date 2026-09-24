import {
  ArrowUpRight,
  Boxes,
  CloudCog,
  Code2,
  Rocket,
} from 'lucide-react'

import { Container } from '../../components/Container/Container'

import { useI18n } from '../../i18n/I18nProvider'

import {
  BackgroundNumber,
  Bottom,
  BottomDescription,
  BottomText,
  BottomTitle,
  ContactButton,
  Content,
  Description,
  Eyebrow,
  EyebrowDot,
  Glow,
  Header,
  Highlight,
  Icon,
  List,
  ListItem,
  Section,
  ServiceCard,
  ServiceDescription,
  ServicesGrid,
  ServiceTitle,
  Title,
} from './styles'

const services = [
  {
    number: '01',
    icon: Code2,
  },
  {
    number: '02',
    icon: Boxes,
  },
  {
    number: '03',
    icon: CloudCog,
  },
  {
    number: '04',
    icon: Rocket,
  },
]

export function Services() {
  const { t } = useI18n()

  return (
    <Section id="services">
      <Container>
        <Header>
          <div>
            <Eyebrow>
              <EyebrowDot />
              {t.services.eyebrow}
            </Eyebrow>

            <Title>
              {t.services.title}
              <br />
              <Highlight>{t.services.highlight}</Highlight>
            </Title>
          </div>

          <Description>
            {t.services.description}
          </Description>
        </Header>

        <ServicesGrid>
          {services.map(({ number, icon: IconComponent }, index) => {
            const service = t.services.items[index]

            return (
              <ServiceCard key={number}>
                <BackgroundNumber>
                  {number}
                </BackgroundNumber>

                <Glow />

                <Icon>
                  <IconComponent size={22} />
                </Icon>

                <Content>
                  <ServiceTitle>
                    {service.title}
                  </ServiceTitle>

                  <ServiceDescription>
                    {service.description}
                  </ServiceDescription>

                  <List>
                    {service.items.map((item) => (
                      <ListItem key={item}>
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Content>
              </ServiceCard>
            )
          })}
        </ServicesGrid>

        <Bottom>
          <BottomText>
            <BottomTitle>
              {t.services.bottom.title}
            </BottomTitle>

            <BottomDescription>
              {t.services.bottom.description}
            </BottomDescription>
          </BottomText>

          <ContactButton href="#contact">
            {t.services.bottom.action}
            <ArrowUpRight size={16} />
          </ContactButton>
        </Bottom>
      </Container>
    </Section>
  )
}