import React from 'react'
import OptionsProvider, { useOptionsContext } from './OptionsProvider'
import StateProvider, { useStateContext } from './StateProvider'

function SlidebarProviders({ nodeTree, options, type, children }) {
  return (
    <OptionsProvider options={options} type={type}>
      <StateProvider nodeTree={nodeTree} type={type}>
        {children}
      </StateProvider>
    </OptionsProvider>
  )
}

export function useSlidebarContext() {
  return {
    options: useOptionsContext(),
    ...useStateContext()
  }
}

export default SlidebarProviders
