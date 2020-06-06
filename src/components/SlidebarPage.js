import React from 'react'
import SlidebarButton from './SlidebarButton'
import { useSlidebarContext } from '../providers/SlidebarProviders'
import isFirstNode from '../helpers/isFirstNode'
import isLastNode from '../helpers/isLastNode'

function SlidebarPage({ children }) {
  return <div className='slidebar-page'>{children}</div>
}

function NextButton({ label }) {
  const { state, gotoNextPage } = useSlidebarContext()

  if (isLastNode(state)) {
    return null
  }

  function handleClick() {
    gotoNextPage()
  }

  return (
    <SlidebarButton
      variant='link'
      onClick={handleClick}
      label={label || 'Next'}
    />
  )
}

function BackButton({ label }) {
  const { state, gotoPrevPage } = useSlidebarContext()

  if (isFirstNode(state)) {
    return null
  }

  return (
    <SlidebarButton
      variant='link'
      onClick={gotoPrevPage}
      label={label || 'Previous'}
    />
  )
}

SlidebarPage.NextButton = NextButton
SlidebarPage.BackButton = BackButton

export default SlidebarPage
