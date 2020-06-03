import styled from '@emotion/styled'
import React from 'react'
import SlidebarProvider, { useSlidebarContext } from './SlidebarContext'
import MenuItems from './MenuItems'
import Toolbar from './Toolbar'

const StyledSlidebar = styled.div`
  position: relative;
`

function Body() {
  const {
    state: { activeItem }
  } = useSlidebarContext()

  const ChildComponent = activeItem.component
  if (ChildComponent) {
    return (
      <ChildComponent useSlidebarContext={useSlidebarContext} {...activeItem} />
    )
  }

  if (activeItem.children && !!activeItem.children.length) {
    return <MenuItems />
  }

  console.warn(
    `MenuItem object should contain either a component, children, or callback property`
  )

  return null
}

function Slidebar() {
  return (
    <StyledSlidebar className='sidebar'>
      <Toolbar />
      <Body />
    </StyledSlidebar>
  )
}

function Main({ rootNode, callbacks }) {
  return (
    <SlidebarProvider rootNode={rootNode} callbacks={callbacks}>
      <Slidebar />
    </SlidebarProvider>
  )
}

export default Main
