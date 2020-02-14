import React, { FunctionComponent } from 'react'
import { createInjector } from './di'

interface Props {
  name: string;

}

interface BoldProps extends Props {
  weight?: number;
}

const DefaultMama: FunctionComponent<Props> = ({name}) => <div>Mama: {name}</div>
const DefaultPapa: FunctionComponent<Props> = ({name}) => <div>Papa: {name}</div>

const BoldPapa: FunctionComponent<BoldProps> = ({name}) => <div><strong>Papa: {name}</strong></div>

const useMamasAndPapas = createInjector({
  Mama: DefaultMama,
  Papa: DefaultPapa
})

const SomeChild = () => {
  const { Mama, Papa } = useMamasAndPapas()
  return <div><Mama name='Adéla'/>, <Papa name='Karel'/></div>
}

export const ComponentExampleRoot = () => (
  <div>
    <SomeChild/>
    <useMamasAndPapas.Override
      values={{
        Papa: BoldPapa
      }}
    >
      <SomeChild/>
    </useMamasAndPapas.Override>
  </div>
)
