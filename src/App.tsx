import React from 'react'
import './App.css'
import { TodoManager } from './components/TodoManager'
import { OverrideComponents } from './components/OverrideComponents'
import { FancyCheckbox } from './overrides/FancyCheckbox'

function App() {
  return (
    <OverrideComponents
      components={{
        Checkbox: FancyCheckbox
      }}
    >
      <TodoManager/>
    </OverrideComponents>
  )
}

export default App
