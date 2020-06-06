import React from 'react'

export default function isLastNode(state) {
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
  } else if (currentIndex === React.Children.count(children) - 1) {
    return true
  }

  return false
}
