export interface ButtonProps {
  children: string
  onClick: () => void
}

export function Button ({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}
