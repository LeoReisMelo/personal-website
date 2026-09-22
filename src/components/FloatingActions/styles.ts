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

export {
    Actions,
    FloatingButton,
    WhatsAppButton,
    BackToTopButton,
}