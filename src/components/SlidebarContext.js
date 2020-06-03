import React, { createContext, useState, useMemo, useContext } from 'react'
import { DIRECTION } from '../helpers/const'

const SlidebarContext = createContext()

function SlidebarProvider({ rootNode, ...props }) {
  const [state, setState] = useState({
    activeItem: rootNode,
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
