import styled from '@emotion/styled'
import { arrayOf, func, object } from 'prop-types'
import React from 'react'
import { animated } from 'react-spring'
import { nodeType } from '../helpers/types'
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

MenuItems.propTypes = {
  items: arrayOf(nodeType).isRequired,
  transitions: arrayOf(object).isRequired,
  itemOnClick: func.isRequired
}

function MenuItems({ items, transitions, itemOnClick }) {
  return transitions.map(({ item, props, key }) => (
    <StyledMenuItems
      className='menuItems'
      key={key}
      style={props}
      data-uuid={item.uuid}
    >
      {items.map((child) => (
        <MenuItem handleClick={itemOnClick} item={child} key={child.uuid} />
      ))}
    </StyledMenuItems>
  ))
}

export default MenuItems
