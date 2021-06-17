import { Dispatch } from 'react'

import { TodoEntry } from '../data/types'
import { Checkbox } from './Checkbox'
import { TodoDescription } from './TodoDescription'
import { Button } from './Button'

export interface TodoItemProps {
  todoEntry: TodoEntry
  onChange: Dispatch<TodoEntry>
  onEdit: Dispatch<TodoEntry>
  onDelete: Dispatch<TodoEntry>
}

export function TodoItem ({ todoEntry, onChange, onEdit, onDelete }: TodoItemProps) {
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
