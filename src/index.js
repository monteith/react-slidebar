import React from 'react'
import Slidebar from './components/Slidebar'
import SlidebarProviders from './providers/SlidebarProviders'

import assignUuids from './helpers/assignUuids'
import findComponent from './helpers/findComponent'
import getSlidebarType from './helpers/getSlidebarType'

import _SlidebarHeader from './components/SlidebarHeader'
import _SlidebarRoot from './components/SlidebarRoot'
import _SlidebarNode from './components/SlidebarNode'
import _SlidebarPage from './components/SlidebarPage'

function initSlidebar({ children, title, options, ...props }) {
  if (!children || !React.Children.count(children)) {
    throw new Error('This works better with children')
  }

  const rootNode = findComponent(children, _SlidebarRoot)
  const type = getSlidebarType(rootNode.props.children)
  const nodeTree = assignUuids(rootNode)

  console.log(type)

  if (!rootNode) {
    throw new Error('A <SlidebarRoot/> must be provided')
  } else if (!rootNode.props.children) {
    throw new Error('<SlidebarRoot/> must have children')
  }

  return (
    <SlidebarProviders nodeTree={nodeTree} type={type} options={options}>
      <Slidebar>{children}</Slidebar>
    </SlidebarProviders>
  )
}

export const SlidebarNode = _SlidebarNode
export const SlidebarPage = _SlidebarPage
export const SlidebarRoot = _SlidebarRoot
export const SlidebarHeader = _SlidebarHeader

export { useSlidebarContext } from './providers/SlidebarProviders'

export default initSlidebar
