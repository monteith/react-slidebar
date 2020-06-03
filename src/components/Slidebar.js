import styled from '@emotion/styled'
import React from 'react'
import SlidebarProvider from './SlidebarContext'
import MenuItems from './MenuItems'
import Toolbar from './Toolbar'

const StyledSlidebar = styled.div`
  position: relative;
`

function Slidebar() {
  return (
    <StyledSlidebar className='sidebar'>
      <Toolbar />
      <MenuItems />
    </StyledSlidebar>
  )
}

function Main({ rootNode }) {
  return (
    <SlidebarProvider rootNode={rootNode}>
      <Slidebar />
    </SlidebarProvider>
  )
}

export default Main
