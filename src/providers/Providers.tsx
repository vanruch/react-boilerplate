import React, { ReactNode } from 'react'
import { GlobalStyle } from './GlobalStyle'

interface Props {
  children: ReactNode
}
export function Providers(props: Props) {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  )
}
