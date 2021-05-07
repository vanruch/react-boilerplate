import React from 'react'
import { Page, PageContent, Title } from '../components'
import { TaskContainer } from '../components/tasks/TaskContainer'
import { tasks } from '../data/tasks'

export function Home() {
  return (
    <Page>
      <PageContent>
        <Title>TODO list</Title>
        <TaskContainer tasks={tasks}/>
      </PageContent>
    </Page>
  )
}
