import React from 'react'
import styled from '@emotion/styled'

const StyledButtonLink = styled.button`
  background: none;
  border: none;
  color: #069;
  cursor: pointer;
  font-family: arial, sans-serif;
  padding: 0 !important;
  text-decoration: underline;

  &.-active {
    font-weight: 900;
  }
`

const variants = {
  link: StyledButtonLink
}

function SlidebarButton({ label, onClick, variant, ...props }) {
  const StyledButton = variants[variant] || StyledButtonLink
  return (
    <StyledButton onClick={onClick} {...props}>
      {label}
    </StyledButton>
  )
}

export default SlidebarButton
