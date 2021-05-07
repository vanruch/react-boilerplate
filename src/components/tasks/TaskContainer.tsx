import React from 'react'
import { TaskCard } from './TaskCard'
import styled from 'styled-components'
import { useTasks } from '../../hooks/useTasks'

interface TaskContainerProps {
  className?: string
}

function TaskContainer({ className }: TaskContainerProps ) {
  const { tasks } = useTasks()
  return (
    <div className={className}>
      {tasks.map((task, id) => <TaskCard key={task.title} task={task} id={id}/>)}
    </div>
  )
}

const StyledContainer = styled(TaskContainer)`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  
  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
`

export {StyledContainer as TaskContainer}
