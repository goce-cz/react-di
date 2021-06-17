import { TextInput } from '../components/TextInput'
import { Button } from '../components/Button'
import { TodoDescription } from '../components/TodoDescription'
import { TodoEditor } from '../components/TodoEditor'
import { TodoItem } from '../components/TodoItem'
import { TodoList } from '../components/TodoList'
import { Checkbox } from '../components/Checkbox'
import { ComponentType, createContext, useContext } from 'react'

const defaultComponents = {
  Checkbox,
  Button,
  TextInput,
  TodoDescription,
  TodoEditor,
  TodoItem,
  TodoList
}

export type ComponentPalette = {
  [K in keyof typeof defaultComponents]: typeof defaultComponents[K] extends ComponentType<infer P>
    ? ComponentType<P>
    : never
}

export const ComponentPaletteContext = createContext<ComponentPalette>(defaultComponents)

export function useComponentPalette (): ComponentPalette {
  return useContext(ComponentPaletteContext)
}
