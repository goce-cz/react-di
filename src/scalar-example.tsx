import React from 'react'
import { createInjector } from './di'

const useMamasAndPapas = createInjector({
  mama: 'mama',
  papa: 'papa'
})

const SomeChild = () => {
  const { mama, papa } = useMamasAndPapas()
  return <div>{mama}, {papa}</div>
}

export const ScalarExampleRoot = () => (
  <div>
    <SomeChild/>
    <useMamasAndPapas.Provider
      override={{
        mama: 'máma'
      }}
    >
      <SomeChild/>
    </useMamasAndPapas.Provider>
  </div>
)
