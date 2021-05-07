import React from 'react'
import { Task } from '../../models/task'
import { TaskCard } from './TaskCard'
import styled from 'styled-components'

interface TaskContainerProps {
  tasks: Task[]
  className?: string
}

function TaskContainer({ tasks, className }: TaskContainerProps ) {
  return (
    <div className={className}>
      {tasks.map(task => <TaskCard task={task}/>)}
    </div>
  )
}

const StyledContainer = styled(TaskContainer)`
  display: flex;
  flex-direction: column;
  
  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
`

export  {StyledContainer as TaskContainer}
