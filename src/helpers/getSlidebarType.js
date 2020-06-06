import React from 'react'
import SlidebarNode from '../components/SlidebarNode'
import SlidebarPage from '../components/SlidebarPage'

export default function getSlidebarType(children) {
  const isNode =
    React.Children.toArray(children).some((node) => {
      return node.type === SlidebarNode
    }) && 'nodes'

  const isPages =
    React.Children.toArray(children).some((node) => {
      return node.type === SlidebarPage
    }) && 'pages'

  const trueValues = [isNode, isPages].filter((item) => !!item)

  if (trueValues.length === 1) {
    return trueValues[0]
  } else if (trueValues.length > 1) {
    throw new Error('Invalid structure: Too many types found')
  } else {
    throw new Error('Invalid structure: No type found')
  }
}
