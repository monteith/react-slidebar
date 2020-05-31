import styled from '@emotion/styled'
import { arrayOf, func, node, oneOfType } from 'prop-types'
import React from 'react'

const StyledButton = styled.button`
  background: none;
  border: none;
  color: #069;
  cursor: pointer;
  font-family: arial, sans-serif;
  padding: 0 !important;
  text-decoration: underline;
`
ButtonLink.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  onClick: func.isRequired
}

function ButtonLink({ children, onClick }) {
  return (
    <StyledButton className='-link' onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default ButtonLink
