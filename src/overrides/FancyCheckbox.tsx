import { motion } from 'framer-motion'

import { CheckboxProps } from '../components/Checkbox'

export function FancyCheckbox ({checked, onChange}: CheckboxProps) {
  return (
    <svg
      onClick={() => onChange(!checked)}
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="#F6F6F4" stroke="#CBC5BB"/>
      <motion.path
        animate={{ pathLength: checked ? 1 : 0 }}
        d="M8.22223 16.7936L12.8889 21.5555L23.7778 10.4444"
        stroke="#da8a66"
        strokeWidth="2"
      />
    </svg>
  )
}
