import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useTransition } from 'react-spring'
import MenuItems from './MenuItems'
import Toolbar from './Toolbar'

const DIRECTION = {
  FORWARD: 'forward',
  BACKWARD: 'backward'
}

const StyledSlidebar = styled.div`
  position: relative;
`

function Slidebar({ menuItems }) {
  const [history, setHistory] = useState([])
  const [activeItem, setActive] = useState(menuItems)
  const [direction, setDirection] = useState(DIRECTION.FORWARD)

  const { children } = activeItem

  function handleClick(item, newDirection = DIRECTION.FORWARD) {
    setDirection(newDirection)

    if (!item.children || typeof item.action === 'function') {
      item.action(item)
      return
    }

    const newHistory = history

    if (newDirection === DIRECTION.BACKWARD) {
      newHistory.shift()
    } else {
      newHistory.unshift(activeItem)
    }

    setHistory(newHistory)
    setActive(item)
  }

  const transitions = useTransition(activeItem, (item) => item.uuid, {
    from:
      direction === DIRECTION.FORWARD
        ? { opacity: 0, transform: 'translate3d(100%,0,0)' }
        : { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave:
      direction === DIRECTION.FORWARD
        ? { opacity: 0, transform: 'translate3d(-50%,0,0)' }
        : { opacity: 0, transform: 'translate3d(100%,0,0)' }
  })

  return (
    <StyledSlidebar className='sidebar'>
      {history[0] && (
        <Toolbar
          backAction={() => handleClick(history[0], DIRECTION.BACKWARD)}
          itemName={history[0].name}
        />
      )}
      <MenuItems
        items={children}
        itemOnClick={handleClick}
        transitions={transitions}
      />
    </StyledSlidebar>
  )
}

export default Slidebar
