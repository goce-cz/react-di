import { FC } from 'react'
import { ButtonProps } from '../components/Button'

export const ConciseButton: FC<ButtonProps> = ({
  children,
  onClick
}) => (
  <button
    onClick={onClick}
    title={children}
  >
    {children.charAt(0)}
  </button>
)
