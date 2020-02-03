import React, { createContext, FunctionComponent, useContext, useMemo } from 'react'

type ProviderComponent<T extends Record<string, any>> = FunctionComponent<{ override: Partial<T> }>

interface DependencyInjector<T extends Record<string, any>> {
  Provider: ProviderComponent<T>;

  (): T;
}

function useShallowObjectMemo<T extends Record<string, any>> (obj: T) {
  return useMemo(
    () => obj,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Object.keys(obj)
      .sort()
      .flatMap(key => [key, obj[key]])
  )
}

export function createInjector<T extends Record<string, any>> (defaults: T): DependencyInjector<T> {
  const context = createContext(defaults)
  const useDependencies = (() => useContext(context)) as DependencyInjector<T>

  const Provider: ProviderComponent<T> = ({ override, children }) => {
    const parentValues = useContext(context)
    const childValues = useShallowObjectMemo({ ...parentValues, ...override })
    return <context.Provider value={childValues}>{children}</context.Provider>
  }

  useDependencies.Provider = Provider

  return useDependencies
}
