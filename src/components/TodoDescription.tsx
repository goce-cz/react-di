import { TodoEntry } from '../data/types'

export interface TodoDescriptionProps {
  todoEntry: TodoEntry
}

export function TodoDescription ({ todoEntry }: TodoDescriptionProps) {
  return (
    <span>{todoEntry.description}</span>
  )
}
