import React from 'react'
import uuid from './uuid'

export default function assignUuids(rootElement) {
  const props = {
    ...rootElement.props,
    _uuid: uuid()
  }

  if (typeof rootElement === 'string') {
    return rootElement
  }

  if (rootElement.props.children) {
    props.children = React.Children.map(rootElement.props.children, (child) =>
      assignUuids(child)
    )
  }

  return React.cloneElement(rootElement, {
    ...props
  })
}
