import styled from '@emotion/styled'
import React from 'react'
import { animated, useTransition } from 'react-spring'
import { DIRECTION } from '../helpers/const'
import { useSlidebarContext } from './SlidebarContext'
import MenuItem from './MenuItem'

const StyledMenuItems = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0%;
  position: absolute;
  top: 3rem;
  width: 100%;
`

function MenuItems() {
  const { state, setState } = useSlidebarContext()
  const { activeItem, direction } = state

  const transitions = useTransition(
    activeItem,
    (activeItem) => activeItem.uuid,
    {
      from:
        direction === DIRECTION.FORWARD
          ? { opacity: 0, transform: 'translate3d(100%,0,0)' }
          : { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave:
        direction === DIRECTION.FORWARD
          ? { opacity: 0, transform: 'translate3d(-50%,0,0)' }
          : { opacity: 0, transform: 'translate3d(100%,0,0)' }
    }
  )

  function handleClick(item) {
    const newHistory = [activeItem, ...state.history]
    setState({
      ...state,
      history: newHistory,
      activeItem: item,
      direction: DIRECTION.FORWARD
    })
  }

  const items = state.activeItem.children

  return transitions.map(({ item, props, key }) => (
    <StyledMenuItems
      className='menuItems'
      key={key}
      style={props}
      data-uuid={item.uuid}
    >
      {items.map((child) => (
        <MenuItem
          handleClick={() => handleClick(child)}
          item={child}
          key={child.uuid}
        />
      ))}
    </StyledMenuItems>
  ))
}

export default MenuItems
