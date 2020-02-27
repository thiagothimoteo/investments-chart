import React from 'react'
import styled from 'styled-components';

const StyledDescription = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  align-items: center;
  color: #7171a6;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(41,41,64,.1);
  border-radius: 4px;
`

const StyledIcon = styled.img`
  max-width: 1em;
  max-height: 1em;
  margin-right: 1rem;
`

const Description = ({ children, icon, ...rest }) => {
  return (
    <StyledDescription {...rest}>
      { icon && <StyledIcon src={icon} /> }
      <div>{children}</div>
    </StyledDescription>
  )
}

export default Description
