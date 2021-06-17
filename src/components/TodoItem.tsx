import { Dispatch } from 'react'

import { TodoEntry } from '../data/types'
import { useComponentPalette } from '../utils/component-palette'

export interface TodoItemProps {
  todoEntry: TodoEntry
  onChange: Dispatch<TodoEntry>
  onEdit: Dispatch<TodoEntry>
  onDelete: Dispatch<TodoEntry>
}

export function TodoItem ({ todoEntry, onChange, onEdit, onDelete }: TodoItemProps) {
  const { Checkbox, TodoDescription, Button } = useComponentPalette()

  const handleChangeState: Dispatch<boolean> = done => onChange({ ...todoEntry, done })

  return (
    <li key={todoEntry.id}>
      <Checkbox
        checked={todoEntry.done}
        onChange={handleChangeState}
      />
      <TodoDescription todoEntry={todoEntry}/>
      <Button onClick={() => onEdit(todoEntry)}>Edit</Button>
      <Button onClick={() => onDelete(todoEntry)}>Delete</Button>
    </li>
  )
}
