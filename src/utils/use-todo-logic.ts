import { Dispatch, SetStateAction, useMemo } from 'react'
import { TodoEntry } from '../data/types'

export interface TodoLogic {
  removeEntry: Dispatch<TodoEntry>
  upsertEntry: Dispatch<TodoEntry | Omit<TodoEntry, 'id'>>
}

export function useTodoLogic (setTodoEntries: Dispatch<SetStateAction<TodoEntry[]>>): TodoLogic {
  return useMemo(
    () => ({
      removeEntry: (todoEntry) =>
        setTodoEntries(prev => prev.filter(existingEntry => todoEntry.id !== existingEntry.id)),
      upsertEntry: todoEntry => {
        if ('id' in todoEntry) {
          setTodoEntries(prev => prev.map(existingEntry =>
            existingEntry.id === todoEntry.id
              ? todoEntry
              : existingEntry
          ))
        } else {
          setTodoEntries(prev => [
            { id: Date.now(), ...todoEntry },
            ...prev
          ])
        }
      }
    }),
    [setTodoEntries]
  )
}

export const EMPTY_TODO: Omit<TodoEntry, 'id'> = { description: '', done: false }
