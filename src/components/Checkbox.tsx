import { Dispatch } from 'react'

export interface CheckboxProps {
  checked: boolean
  onChange: Dispatch<boolean>
}

export function Checkbox ({ checked, onChange }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={event => onChange(event.target.checked)}
    />
  )
}
