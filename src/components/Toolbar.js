import styled from '@emotion/styled'
import React from 'react'
import { useSlidebarContext } from './SlidebarContext'
import { DIRECTION } from '../helpers/const'
import ButtonLink from './ButtonLink'

const StyledToolbar = styled.div`
  padding: 1rem;
  text-align: left;
`

function Toolbar() {
  const { state, setState } = useSlidebarContext()
  const { history } = state

  if (!history[0]) {
    return null
  }

  const item = history[0]

  function backAction() {
    const activeItem = history[0]
    const newHistory = history.slice(1)
    setState({
      ...state,
      history: newHistory,
      direction: DIRECTION.BACK,
      activeItem
    })
  }

  return (
    <StyledToolbar className='toolbar'>
      <ButtonLink onClick={backAction}>
        &larr;
        {item.name}
      </ButtonLink>
    </StyledToolbar>
  )
}

export default Toolbar
