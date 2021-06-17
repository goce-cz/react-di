import { TodoList, TodoListProps } from '../components/TodoList'
import { ConciseButton } from './ConciseButton'
import { useComponentPalette } from '../utils/component-palette'

export function ConciseTodoList (props: TodoListProps) {
  return (
    <useComponentPalette.Override
      values={{
        Button: ConciseButton
      }}
    >
      <TodoList {...props}/>
    </useComponentPalette.Override>
  )
}
