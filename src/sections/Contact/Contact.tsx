import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import styled from 'styled-components'

import { Container } from '../../components/Container/Container'

const CONTACT = {
  email: 'contato@leonardoreismelo.com.br',
  phone: '+55 00 00000-0000',
  linkedin: 'https://www.linkedin.com/in/SEU-LINKEDIN',
  github: 'https://github.com/SEU-GITHUB',
  instagram: 'https://www.instagram.com/SEU-INSTAGRAM',
}

const Section = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 9rem 0 7rem;
  background: var(--color-background-alt);
`

const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(
      to right,
      var(--color-border) 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      var(--color-border) 1px,
      transparent 1px
    );
  background-size: 80px 80px;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
  opacity: 0.3;
  pointer-events: none;
`

const Glow = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: var(--color-brand);
  opacity: 0.07;
  filter: blur(130px);
  transform: translateX(-50%);
  pointer-events: none;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`

const Header = styled.div`
  max-width: 900px;
`

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
  color: var(--color-brand);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

const EyebrowDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-brand);
  box-shadow: 0 0 0 5px var(--color-brand-soft);
`

const Title = styled.h2`
  max-width: 950px;
  color: var(--color-text);
  font-size: clamp(3rem, 7vw, 6.5rem);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 0.96;
`

const Highlight = styled.span`
  color: var(--color-brand);
`

const Description = styled.p`
  max-width: 650px;
  margin-top: 2rem;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
`

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2.25rem;
`

const PrimaryButton = styled.a`
  display: inline-flex;
  height: 50px;
  align-items: center;
  gap: 0.6rem;
  padding: 0 1.35rem;
  border-radius: 999px;
  background: var(--color-brand);
  color: var(--color-white);
  font-size: 0.85rem;
  font-weight: 600;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);

  &:hover {
    background: var(--color-brand-dark);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgb(229 57 53 / 20%);
  }
`

const SecondaryButton = styled.a`
  display: inline-flex;
  height: 50px;
  align-items: center;
  padding: 0 1.35rem;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  font-size: 0.85rem;
  font-weight: 600;
  transition:
    border-color var(--transition-fast),
    color var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    border-color: var(--color-brand);
    color: var(--color-brand);
    transform: translateY(-2px);
  }
`

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 6rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 4rem;
  }
`

const Detail = styled.a`
  display: flex;
  min-height: 110px;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  transition:
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);

  &:hover {
    border-color: var(--color-border-hover);
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgb(0 0 0 / 6%);
  }
`

const DetailIcon = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--color-brand-soft);
  color: var(--color-brand);
`

const DetailContent = styled.div`
  min-width: 0;
`

const DetailLabel = styled.span`
  display: block;
  margin-bottom: 0.35rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

const DetailValue = styled.span`
  display: block;
  overflow: hidden;
  color: var(--color-text);
  font-size: 0.82rem;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${Detail}:hover & {
    color: var(--color-brand);
  }
`

const GithubIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.287Z"
    />

    {/* i */}
    <circle
      cx="5.337"
      cy="5.371"
      r="1.7"
    />

    <rect
      x="3.56"
      y="8.999"
      width="3.554"
      height="11.453"
    />
    <path
      d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.203 24 24 23.227 24 22.271V1.729C24 .774 23.203 0 22.225 0Z"
      fill="none"
    />
  </svg>
)

const InstagramIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="0.75"
      fill="currentColor"
      stroke="none"
    />
  </svg>
)

export function Contact() {
  return (
    <Section id="contact">
      <BackgroundGrid />
      <Glow />

      <Container>
        <Content>
          <Header>
            <Eyebrow>
              <EyebrowDot />
              Get in touch
            </Eyebrow>

            <Title>
              Let&apos;s build something
              <Highlight> meaningful.</Highlight>
            </Title>

            <Description>
              Whether you are building a new product, evolving an
              existing system, or dealing with a difficult technical
              problem, I&apos;m open to conversations about engineering
              and new opportunities.
            </Description>

            <Actions>
              <PrimaryButton href={`mailto:${CONTACT.email}`}>
                Send me an email
                <ArrowUpRight size={17} />
              </PrimaryButton>

              <SecondaryButton href="#home">
                Back to top
              </SecondaryButton>
            </Actions>
          </Header>

          <Details>
            <Detail href={`mailto:${CONTACT.email}`}>
              <DetailIcon>
                <Mail size={19} />
              </DetailIcon>

              <DetailContent>
                <DetailLabel>Email</DetailLabel>
                <DetailValue>{CONTACT.email}</DetailValue>
              </DetailContent>
            </Detail>

            <Detail href={`tel:${CONTACT.phone}`}>
              <DetailIcon>
                <Phone size={19} />
              </DetailIcon>

              <DetailContent>
                <DetailLabel>Phone</DetailLabel>
                <DetailValue>{CONTACT.phone}</DetailValue>
              </DetailContent>
            </Detail>

            <Detail
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <DetailIcon>
                <LinkedinIcon />
              </DetailIcon>

              <DetailContent>
                <DetailLabel>LinkedIn</DetailLabel>
                <DetailValue>LinkedIn profile</DetailValue>
              </DetailContent>
            </Detail>

            <Detail
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
            >
              <DetailIcon>
                <GithubIcon />
              </DetailIcon>

              <DetailContent>
                <DetailLabel>GitHub</DetailLabel>
                <DetailValue>GitHub profile</DetailValue>
              </DetailContent>
            </Detail>

            <Detail
              href={CONTACT.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <DetailIcon>
                <InstagramIcon />
              </DetailIcon>

              <DetailContent>
                <DetailLabel>Instagram</DetailLabel>
                <DetailValue>Instagram profile</DetailValue>
              </DetailContent>
            </Detail>

            <Detail href="#contact">
              <DetailIcon>
                <MapPin size={19} />
              </DetailIcon>

              <DetailContent>
                <DetailLabel>Location</DetailLabel>
                <DetailValue>
                  Brazil · Available remotely
                </DetailValue>
              </DetailContent>
            </Detail>
          </Details>
        </Content>
      </Container>
    </Section>
  )
}