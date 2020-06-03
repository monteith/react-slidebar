import styled from '@emotion/styled'
import React from 'react'
import SlidebarProvider, {
  OptionsProvider,
  useSlidebarOptions,
  useSlidebarContext
} from './SlidebarContext'
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
  const { classNames } = useSlidebarOptions()
  return (
    <StyledSlidebar className={`sidebar ${classNames.Slidebar || ''}`}>
      <Toolbar />
      <Body />
    </StyledSlidebar>
  )
}

function Main({ rootNode, options }) {
  return (
    <OptionsProvider options={options}>
      <SlidebarProvider rootNode={rootNode}>
        <Slidebar />
      </SlidebarProvider>
    </OptionsProvider>
  )
}

export default Main
