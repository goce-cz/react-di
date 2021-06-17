import { Dispatch, useState } from 'react'

import { mockTodoEntries } from '../data/mock'
import { TodoEntry } from '../data/types'
import { TodoList } from './TodoList'
import { TodoEditor } from './TodoEditor'
import { Button } from './Button'
import { EMPTY_TODO, useTodoLogic } from '../utils/use-todo-logic'

export function TodoManager () {
  const [todoEntries, setTodoEntries] = useState(mockTodoEntries)

  const {
    upsertEntry,
    removeEntry
  } = useTodoLogic(setTodoEntries)

  const [editedTodo, setEditedTodo] = useState<TodoEntry | Omit<TodoEntry, 'id'> | null>(null)

  const handleSave: Dispatch<TodoEntry | Omit<TodoEntry, 'id'>> = todoEntry => {
    upsertEntry(todoEntry)
    setEditedTodo(null)
  }

  return (
    <div>
      {editedTodo &&
      <TodoEditor
        key={'id' in editedTodo ? editedTodo.id : 'new'}
        todoEntry={editedTodo}
        onChange={handleSave}
        onCancel={() => setEditedTodo(null)}
      />
      }
      {!editedTodo &&
      <Button
        onClick={() => setEditedTodo(EMPTY_TODO)}
      >
        Add new entry
      </Button>
      }
      <TodoList
        todoEntries={todoEntries}
        onChange={upsertEntry}
        onDelete={removeEntry}
        onEdit={setEditedTodo}
      />
    </div>
  )
}
