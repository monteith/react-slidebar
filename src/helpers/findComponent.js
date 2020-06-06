import React from 'react'

export default function findComponent(children, component) {
  return React.Children.toArray(children).find((node) => {
    if (!React.isValidElement(node)) {
      return false
    }
    return node.type === component
  })
}
