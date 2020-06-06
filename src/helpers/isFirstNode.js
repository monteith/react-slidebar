import React from 'react'

export default function isFirstNode(state) {
  const {
    activeNode,
    nodeTree: {
      props: { children }
    }
  } = state

  const currentIndex = React.Children.toArray(children).findIndex(
    (child) => child.props._uuid === activeNode.props._uuid
  )

  if (currentIndex < 0) {
    throw new Error('active node not found')
  } else if (currentIndex === 0) {
    return true
  }

  return false
}
