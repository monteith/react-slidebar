import React, { useState } from 'react'
import { useSlidebarContext } from '../providers/SlidebarProviders'
import { animated, useTransition } from 'react-spring'
import styled from '@emotion/styled'

import SlidebarNode from './SlidebarNode'

const StyledSlidebarItems = styled.div`
  display: flex;
  position: relative;
`

const StyledSlidebarChildren = styled(animated.div)`
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  button {
    margin-bottom: 1rem;
  }
`

function SlidebarItems() {
  const {
    state: { activeNode, direction }
  } = useSlidebarContext()

  const [active, setActive] = useState(null)

  const transitions = useTransition(
    activeNode,
    (activeNode) => activeNode.props._uuid,
    {
      from:
        direction === 'forward'
          ? {
              opacity: 0,
              transform: 'translate3d(100%,0,0)'
            }
          : {
              opacity: 0,
              transform: 'translate3d(-50%, 0, 0)'
            },
      enter: {
        position: 'relative',
        opacity: 1,
        transform: 'translate3d(0%,0,0)'
      },

      leave:
        direction === 'forward'
          ? {
              position: 'absolute',
              opacity: 0,
              transform: 'translate3d(-50%,0,0)'
            }
          : {
              position: 'absolute',
              opacity: 0,
              transform: 'translate3d(100%,0,0)'
            }
    }
  )

  function hasSlidebarChildren(node) {
    if (!React.isValidElement(node)) {
      return false
    }
    if (!node.props.children) {
      return false
    }
    if (React.Children.count(node.props.children) === 0) {
      return false
    }
    return React.Children.toArray(node.props.children).some(
      (child) => child.type === SlidebarNode
    )
  }

  function renderChild(node) {
    if (node.type === SlidebarNode && !hasSlidebarChildren(node)) {
      return React.cloneElement(node, {
        ...node.props,
        isActive: active === node.props._uuid,
        toggle: () => setActive(node.props._uuid)
      })
    } else {
      return node
    }
  }

  return (
    <StyledSlidebarItems className='slidebar-items'>
      {transitions.map(({ item, props, key }) => (
        <StyledSlidebarChildren
          key={key}
          style={props}
          data-uuid={item.props._uuid}
        >
          {activeNode.props.children.map(renderChild)}
        </StyledSlidebarChildren>
      ))}
    </StyledSlidebarItems>
  )
}

export default SlidebarItems
