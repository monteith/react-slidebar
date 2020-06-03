import React, { createContext, useState, useMemo, useContext } from 'react'
import { DIRECTION } from '../helpers/const'

const SlidebarContext = createContext()

function SlidebarProvider({ rootNode, callbacks, ...props }) {
  const [state, setState] = useState({
    activeItem: rootNode,
    callbacks: callbacks || {},
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

export default SlidebarProvider
