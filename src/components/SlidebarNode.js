import React from 'react'
import SlidebarButton from './SlidebarButton'
import { string, func, bool } from 'prop-types'
import { useSlidebarContext } from '../providers/SlidebarProviders'

SlidebarNode.displayName = 'SlidebarNode'

SlidebarNode.propTypes = {
  title: string,
  toggle: func,
  onClick: func,
  isActive: bool
}

function SlidebarNode({
  title,
  toggle,
  onClick,
  isActive,
  _uuid,
  children,
  ...props
}) {
  const { gotoNode } = useSlidebarContext()

  const hasNodes = React.Children.toArray(children).some((node) => {
    return node.type === SlidebarNode
  })

  function handleClick() {
    toggle()
    if (typeof onClick === 'function') {
      onClick({ title, isActive, ...props })
    }
  }

  return (
    <div className='slidebar-node'>
      <SlidebarButton
        className={isActive ? '-active' : ''}
        variant='link'
        onClick={hasNodes ? () => gotoNode(_uuid) : handleClick}
        label={title}
      />
    </div>
  )
}

export default SlidebarNode
