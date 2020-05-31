import styled from '@emotion/styled';
import React from 'react';
import ButtonLink from './ButtonLink';

const StyledToolbar = styled.div`
  padding: 1rem;
  text-align: left;
`;

function Toolbar({ itemName, backAction }) {
  return (
    <StyledToolbar className="toolbar">
      <ButtonLink onClick={backAction}>
        &larr;
        {itemName}
      </ButtonLink>
    </StyledToolbar>
  );
}

export default Toolbar;
