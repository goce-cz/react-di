import React from 'react'
import './App.css'
import { TodoManager } from './components/TodoManager'
import { OverrideComponents } from './components/OverrideComponents'
import { FancyCheckbox } from './overrides/FancyCheckbox'
import { ConciseTodoList } from './overrides/ConciseTodoList'

function App() {
  return (
    <OverrideComponents
      components={{
        Checkbox: FancyCheckbox,
        TodoList: ConciseTodoList
      }}
    >
      <TodoManager/>
    </OverrideComponents>
  )
}

export default App
