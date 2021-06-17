import React from 'react'
import './App.css'
import { TodoManager } from './components/TodoManager'
import { OverrideComponents } from './components/OverrideComponents'
import { FancyCheckbox } from './overrides/FancyCheckbox'
import { ConciseButton } from './overrides/ConciseButton'

function App() {
  return (
    <OverrideComponents
      components={{
        Checkbox: FancyCheckbox,
        Button: ConciseButton
      }}
    >
      <TodoManager/>
    </OverrideComponents>
  )
}

export default App
