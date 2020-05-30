import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring';
import MenuItem from './MenuItem';
import './styles.css';

const DIRECTION = {
  FORWARD: 'forward',
  BACKWARD: 'backward',
};

function Slidebar({ menuItems }) {
  const [history, setHistory] = useState([]);
  const [activeItem, setActive] = useState(menuItems);
  const [direction, setDirection] = useState(DIRECTION.FORWARD);

  const { children } = activeItem;

  function handleClick(item, newDirection = DIRECTION.FORWARD) {
    setDirection(newDirection);

    if (!item.children || typeof item.action === 'function') {
      item.action.call(item);
      return;
    }

    let newHistory = history;

    if (newDirection === DIRECTION.BACKWARD) {
      newHistory.shift();
    } else {
      newHistory.unshift(activeItem);
    }

    setHistory(newHistory);
    setActive(item);
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
        : { opacity: 0, transform: 'translate3d(100%,0,0)' },
  });

  return (
    <div className="sidebar">
      {history[0] && (
        <div className="toolbar">
          <button
            className="-link"
            onClick={() => handleClick(history[0], DIRECTION.BACKWARD)}
          >
            &larr;
            {history[0].name}
          </button>
        </div>
      )}
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div
            className="menuItems"
            key={key}
            style={props}
            data-uuid={item.uuid}
          >
            {children.map((child) => (
              <MenuItem
                handleClick={() => handleClick(child)}
                item={child}
                key={child.uuid}
              />
            ))}
          </animated.div>
        );
      })}
    </div>
  );
}

export default Slidebar;
