import React from 'react'
import styled from 'styled-components'
import { Page, PageContent, Title } from '../components'
import { Colors } from '../constants'

export function Home() {
  return (
    <Page>
      <PageContent>
        <Title>Title</Title>
        <p>This is a simple React App</p>
        <Separator />
        <p>Lorem ipsum dupa</p>
      </PageContent>
    </Page>
  )
}

const Separator = styled.hr`
  border: none;
  border-bottom: 1px solid ${Colors.LightGray};
  margin: 24px -24px;
`
