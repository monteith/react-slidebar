import styled from '@emotion/styled'
import React from 'react'
import { useSlidebarOptions } from './SlidebarContext'
const StyledButton = styled.button`
  background: none;
  border: none;
  color: #069;
  cursor: pointer;
  font-family: arial, sans-serif;
  padding: 0 !important;
  text-decoration: underline;
`

function ButtonLink({ children, onClick }) {
  const { classNames } = useSlidebarOptions()
  return (
    <StyledButton
      className={`-link ${classNames.Button || ''}`}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
}

export default ButtonLink
