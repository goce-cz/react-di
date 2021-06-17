import { TodoEntry } from '../data/types'
import { Dispatch } from 'react'
import { useComponentPalette } from '../utils/component-palette'

export interface TodoListProps {
  todoEntries: TodoEntry[]
  onChange: Dispatch<TodoEntry>
  onEdit: Dispatch<TodoEntry>
  onDelete: Dispatch<TodoEntry>
}

export function TodoList ({ todoEntries, onChange, onEdit, onDelete }: TodoListProps) {
  const { TodoItem } = useComponentPalette()

  return (
    <ul>
      {
        todoEntries.map(todoEntry => (
          <TodoItem
            key={todoEntry.id}
            todoEntry={todoEntry}
            onChange={onChange}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      }
    </ul>
  )
}
