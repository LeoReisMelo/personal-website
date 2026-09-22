import type { PropsWithChildren } from 'react'
import { ContainerElement } from './styles'

type ContainerProps = PropsWithChildren

export function Container({ children }: ContainerProps) {
  return <ContainerElement>{children}</ContainerElement>
}