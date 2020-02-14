import React, { createContext, FunctionComponent, useContext, useMemo } from 'react'

type ProviderComponent<T extends Record<string, any>> = FunctionComponent<{ values: Partial<T> }>

interface DependencyInjector<T extends Record<string, any>> {
  Override: ProviderComponent<T>;

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

  const Override: ProviderComponent<T> = ({ values, children }) => {
    const parentValues = useContext(context)
    const childValues = useShallowObjectMemo({ ...parentValues, ...values })
    return <context.Provider value={childValues}>{children}</context.Provider>
  }

  useDependencies.Override = Override

  return useDependencies
}
