import { Dispatch, useState } from 'react'

import { TodoEntry } from '../data/types'
import { useComponentPalette } from '../utils/component-palette'

export interface TodoEditorProps {
  todoEntry: TodoEntry | Omit<TodoEntry, 'id'>
  onChange: Dispatch<TodoEntry | Omit<TodoEntry, 'id'>>
  onCancel: () => void
}

export function TodoEditor ({ todoEntry, onChange, onCancel }: TodoEditorProps) {
  const { TextInput, Button } = useComponentPalette()

  const [interimValues, setInterimValues] = useState(() => ({ ...todoEntry }))

  return (
    <div>
      <TextInput
        value={interimValues.description}
        placeholder="Description"
        onChange={description => setInterimValues(prev => ({ ...prev, description }))}
      />

      <Button
        onClick={() => onChange(interimValues)}
      >
        Save
      </Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  )
}
