import styled from '@emotion/styled';
import React from 'react';
import ButtonLink from './ButtonLink';

const StyledWrapper = styled.div`
  margin-top: 1rem;
`;

function MenuItem({ item, handleClick }) {
  return (
    <StyledWrapper className="menuItem" data-uuid={item.uuid}>
      <ButtonLink onClick={() => handleClick(item)}>{item.name}</ButtonLink>
    </StyledWrapper>
  );
}

export default MenuItem;
