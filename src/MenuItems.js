import styled from '@emotion/styled';
import React from 'react';
import { animated } from 'react-spring';
import MenuItem from './MenuItem';

const StyledMenuItems = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0%;
  position: absolute;
  top: 3rem;
  width: 100%;
`;

function MenuItems({ items, transitions, itemOnClick }) {
  return transitions.map(({ item, props, key }) => (
    <StyledMenuItems
      className="menuItems"
      key={key}
      style={props}
      data-uuid={item.uuid}
    >
      {items.map((child) => (
        <MenuItem handleClick={itemOnClick} item={child} key={child.uuid} />
      ))}
    </StyledMenuItems>
  ));
}

export default MenuItems;
