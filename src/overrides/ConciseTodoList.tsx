import { TodoList, TodoListProps } from '../components/TodoList'
import { ConciseButton } from './ConciseButton'
import { OverrideComponents } from '../components/OverrideComponents'

export function ConciseTodoList (props: TodoListProps) {
  return (
    <OverrideComponents
      components={{
        Button: ConciseButton
      }}
    >
      <TodoList {...props}/>
    </OverrideComponents>
  )
}
