import styled from '@emotion/styled'
import React from 'react'
import { DIRECTION } from '../helpers/const'
import { useSlidebarContext } from './SlidebarContext'
import ButtonLink from './ButtonLink'

const StyledWrapper = styled.div`
  margin-top: 1rem;
`

function MenuItem({ item }) {
  const { state, setState } = useSlidebarContext()
  const { activeItem, history } = state

  function handleClick() {
    const newHistory = [activeItem, ...history]

    if (item.callback) {
      item.callback(item)
    }

    if ((!item.children || !item.children.length) && !item.component) {
      return
    }

    setState({
      ...state,
      history: newHistory,
      activeItem: item,
      direction: DIRECTION.FORWARD
    })
  }
  return (
    <StyledWrapper className='menuItem' data-uuid={item.uuid}>
      <ButtonLink onClick={handleClick}>{item.name}</ButtonLink>
    </StyledWrapper>
  )
}

export default MenuItem
