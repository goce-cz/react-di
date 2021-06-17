import React from 'react'
import './App.css'
import { TodoManager } from './components/TodoManager'
import { useComponentPalette } from './utils/component-palette'
import { FancyCheckbox } from './overrides/FancyCheckbox'
import { ConciseTodoList } from './overrides/ConciseTodoList'

function App() {
  return (
    <useComponentPalette.Override
      values={{
        Checkbox: FancyCheckbox,
        TodoList: ConciseTodoList
      }}
    >
      <TodoManager/>
    </useComponentPalette.Override>
  )
}

export default App
