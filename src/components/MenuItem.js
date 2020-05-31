import styled from '@emotion/styled'
import { func } from 'prop-types'
import React from 'react'
import { nodeType } from '../helpers/types'
import ButtonLink from './ButtonLink'

const StyledWrapper = styled.div`
  margin-top: 1rem;
`
MenuItem.propTypes = {
  item: nodeType,
  handleClick: func.isRequired
}

function MenuItem({ item, handleClick }) {
  return (
    <StyledWrapper className='menuItem' data-uuid={item.uuid}>
      <ButtonLink onClick={() => handleClick(item)}>{item.name}</ButtonLink>
    </StyledWrapper>
  )
}

export default MenuItem
