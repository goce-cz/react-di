import { Dispatch } from 'react'

export interface TextInputProps {
  placeholder: string
  value: string
  onChange: Dispatch<string>
}

export function TextInput ({ value, placeholder, onChange }: TextInputProps) {
  return (
    <input type="text" value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder}/>
  )
}
