import { ReactNode, useContext } from 'react'
import { ComponentPaletteContext, ComponentPalette } from '../utils/component-palette'

export interface OverrideComponentsProps {
  components: Partial<ComponentPalette>
  children: ReactNode
}

export function OverrideComponents ({ components, children }: OverrideComponentsProps) {
  const originalComponents = useContext(ComponentPaletteContext)
  const mergedComponents = { ...originalComponents, ...components }
  return (
    <ComponentPaletteContext.Provider value={mergedComponents}>
      {children}
    </ComponentPaletteContext.Provider>
  )
}
