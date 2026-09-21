import type { PropsWithChildren } from 'react'
import styled from 'styled-components'

type ContainerProps = PropsWithChildren

const ContainerElement = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding-inline: clamp(24px, 4vw, 72px);
`

export function Container({ children }: ContainerProps) {
  return <ContainerElement>{children}</ContainerElement>
}