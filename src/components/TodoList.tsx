import { TodoItem } from './TodoItem'
import { TodoEntry } from '../data/types'
import { Dispatch } from 'react'

export interface TodoListProps {
  todoEntries: TodoEntry[]
  onChange: Dispatch<TodoEntry>
  onEdit: Dispatch<TodoEntry>
  onDelete: Dispatch<TodoEntry>
}

export function TodoList ({ todoEntries, onChange, onEdit, onDelete }: TodoListProps) {
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
