import React from 'react'
import styled from 'styled-components';

const StyledDescription = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  margin-bottom: 2rem;
  background-color: #eee;
  align-items: center;
  opacity: .65;
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
