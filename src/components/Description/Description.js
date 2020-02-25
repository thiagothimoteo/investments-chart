import React from 'react'
import styled from 'styled-components';

const StyledDescription = styled.div`
  background-color: #eee;
  color: #12405b;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
`

const Description = ({ children, props }) => {
  return (
    <StyledDescription {...props}>
      {children}
    </StyledDescription>
  )
}

export default Description
