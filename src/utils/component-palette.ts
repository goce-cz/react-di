import { TextInput } from '../components/TextInput'
import { Button } from '../components/Button'
import { TodoDescription } from '../components/TodoDescription'
import { TodoEditor } from '../components/TodoEditor'
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { Checkbox } from '../components/Checkbox'

const defaultComponents = {
  Checkbox,
  Button,
  TextInput,
  TodoDescription,
  TodoEditor,
  TodoItem,
  TodoList
}

export type ComponentPalette = typeof defaultComponents

export function useComponentPalette (): ComponentPalette {
  return defaultComponents
}

