import React from 'react'
import { useSlidebarContext } from '../providers/SlidebarProviders'
import styled from '@emotion/styled'
import SlidebarButton from './SlidebarButton'

const StyledSlidebarHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 80% 1fr;
  height: 5vh;
  position: relative;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slidebar-header-history {
    padding: 0 1rem;
  }

  .breadcrumb-item {
    display: inline-block;
    font-size: 0.8rem;
  }

  .breadcrumb-item span {
    vertical-align: middle;
  }

  .breadcrumb-separator {
    color: #999;
    font-size: 0.65rem;
    margin: 0 0.333rem;
  }

  .slidebar-header-cancel {
    padding: 0 1rem;
  }

  .slidebar-header-cancel button {
    font-size: 1.25rem;
    text-decoration: none;
  }
`

function Separator() {
  return <span className='breadcrumb-separator'>&#x025B8;</span>
}

function Breadcrumb({ item }) {
  const {
    gotoVisited,
    state: { activeNode }
  } = useSlidebarContext()
  const {
    options: {
      toolbar: { linkBreadcrumbs }
    }
  } = useSlidebarContext()

  if (!linkBreadcrumbs || item.props._uuid === activeNode.props._uuid) {
    return <span className='breadcrumb-name'>{item.props.title}</span>
  }

  return (
    <SlidebarButton
      variant='link'
      onClick={() => {
        gotoVisited(item)
      }}
      label={item.props.title}
    />
  )
}

function History() {
  const {
    state: { history },
    options: {
      toolbar: { showActiveInHistory, showHistory, historySeparator }
    }
  } = useSlidebarContext()

  if (!showHistory) {
    return null
  }

  const ItemSeparator = historySeparator || Separator
  const newHistory = showActiveInHistory ? history : history.slice(0, -1)

  return (
    <div className='slidebar-header-history'>
      {newHistory.map((item, index) => {
        return (
          <div className='breadcrumb-item' key={item.props._uuid}>
            <Breadcrumb item={item} />
            {index < newHistory.length - 1 && <ItemSeparator />}
          </div>
        )
      })}
    </div>
  )
}

function BackButton({ label }) {
  const { state, gotoPrevNode, getPrevNode } = useSlidebarContext()
  const {
    options: {
      toolbar: { showBackButton }
    }
  } = useSlidebarContext()

  if (!showBackButton) {
    return null
  }

  const buttonLabel = label || getPrevNode().props.title

  return (
    <div className='slidebar-header-back'>
      {state.history.length > 1 && (
        <SlidebarButton onClick={gotoPrevNode} label={buttonLabel} />
      )}
    </div>
  )
}

function CancelButton() {
  const {
    state: { activeNode, history },
    options: {
      onClose,
      toolbar: { showCloseButton }
    }
  } = useSlidebarContext()

  if (!showCloseButton || typeof onClose !== 'function') {
    return null
  }

  return (
    <div className='slidebar-header-cancel'>
      <SlidebarButton
        label={<>&times;</>}
        variant='link'
        onClick={() => onClose({ activeNode, history })}
      />
    </div>
  )
}

function SlidebarHeader() {
  return (
    <StyledSlidebarHeader className='slidebar-header'>
      <BackButton />
      <History />
      <CancelButton />
    </StyledSlidebarHeader>
  )
}

SlidebarHeader.BackButton = BackButton
SlidebarHeader.CancelButton = CancelButton
SlidebarHeader.History = History

export default SlidebarHeader
