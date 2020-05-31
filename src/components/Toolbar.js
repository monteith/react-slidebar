import styled from '@emotion/styled'
import { func, string } from 'prop-types'
import React from 'react'
import ButtonLink from './ButtonLink'

const StyledToolbar = styled.div`
  padding: 1rem;
  text-align: left;
`
Toolbar.propTypes = {
  itemName: string.isRequired,
  backAction: func.isRequired
}

function Toolbar({ itemName, backAction }) {
  return (
    <StyledToolbar className='toolbar'>
      <ButtonLink onClick={backAction}>
        &larr;
        {itemName}
      </ButtonLink>
    </StyledToolbar>
  )
}

export default Toolbar
