import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Actions = styled.div`
  position: fixed;
  right: clamp(1rem, 2vw, 1.5rem);
  bottom: clamp(1rem, 2vw, 1.5rem);
  z-index: 90;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`

const FloatingButton = styled.a`
  display: inline-flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  box-shadow:
    0 8px 24px rgb(0 0 0 / 12%),
    0 2px 6px rgb(0 0 0 / 8%);

  transition:
    transform var(--transition-fast),
    box-shadow var(--transition-fast);

  &:hover {
    transform: translateY(-3px);

    box-shadow:
      0 12px 30px rgb(0 0 0 / 16%),
      0 3px 8px rgb(0 0 0 / 10%);
  }

  &:active {
    transform: translateY(-1px);
  }
`

const WhatsAppButton = styled(FloatingButton)`
  background: #25d366;
  color: #ffffff;

  &:hover {
    background: #20bd5a;
  }
`

const BackToTopButton = styled(FloatingButton)<{
  $visible: boolean
}>`
  background: var(--color-text);
  color: var(--color-background);

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  visibility: ${({ $visible }) =>
    $visible ? 'visible' : 'hidden'};

  transform: ${({ $visible }) =>
    $visible ? 'translateY(0)' : 'translateY(10px)'};

  pointer-events: ${({ $visible }) =>
    $visible ? 'auto' : 'none'};

  &:hover {
    background: var(--color-brand);
    color: var(--color-white);
  }
`

const WhatsAppIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.84 11.84 0 0 0 12.06 0C5.52 0 .2 5.31.2 11.85c0 2.09.55 4.13 1.59 5.92L.1 24l6.37-1.67a11.86 11.86 0 0 0 5.59 1.42h.01c6.53 0 11.85-5.32 11.85-11.86 0-3.17-1.23-6.15-3.4-8.41ZM12.07 21.72h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.85 9.85 0 1 1 8.39 4.65Zm5.4-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
)

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const footer = document.querySelector('footer')

    if (!footer) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBackToTop(entry.isIntersecting)
      },
      {
        threshold: 0.1,
      },
    )

    observer.observe(footer)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <Actions>
      <BackToTopButton
        href="#home"
        $visible={showBackToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        <ArrowUp size={19} strokeWidth={2.2} />
      </BackToTopButton>

      <WhatsAppButton
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact me on WhatsApp"
        title="Contact me on WhatsApp"
      >
        <WhatsAppIcon />
      </WhatsAppButton>
    </Actions>
  )
}