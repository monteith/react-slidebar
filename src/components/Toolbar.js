import styled from '@emotion/styled'
import React from 'react'
import { useSlidebarContext } from './SlidebarContext'
import { DIRECTION } from '../helpers/const'
import ButtonLink from './ButtonLink'

const StyledToolbar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
  .toolbar-button {
    display: flex;
    align-content: center;
  }
  h1 {
    text-align: center;
  }
`

function Title({ children }) {
  return <h1>{children}</h1>
}

function Toolbar() {
  const { state, setState } = useSlidebarContext()
  const { history, activeItem } = state

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
      <div className='toolbar-button'>
        {history[0] && (
          <ButtonLink onClick={backAction}>
            &larr;
            {item.name}
          </ButtonLink>
        )}
      </div>
      <Title>{activeItem.name}</Title>
    </StyledToolbar>
  )
}

export default Toolbar
