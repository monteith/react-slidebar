import React, { createContext, useState, useMemo, useContext } from 'react'
import { DIRECTION } from '../helpers/const'

const defaultOptions = {
  callbacks: {},
  classNames: {}
}

const SlidebarContext = createContext()
const OptionsContext = createContext(defaultOptions)

function SlidebarProvider({ rootNode, ...props }) {
  const [state, setState] = useState({
    activeItem: rootNode,
    firstRender: true,
    history: [],
    direction: DIRECTION.FORWARD
  })
  const value = useMemo(() => [state, setState], [state, setState])
  return <SlidebarContext.Provider value={value} {...props} />
}

export function useSlidebarContext() {
  const [state, setState] = useContext(SlidebarContext)
  return { state, setState }
}

export function OptionsProvider({ options, ...props }) {
  const value = useMemo(() => ({ ...defaultOptions, ...options }), [
    defaultOptions,
    options
  ])
  return <OptionsContext.Provider value={value} {...props} />
}

export function useSlidebarOptions() {
  const options = useContext(OptionsContext)
  return options
}

export default SlidebarProvider
