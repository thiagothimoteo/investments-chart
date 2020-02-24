import React from 'react'
import styled from 'styled-components';

const StyledDescription = styled.div`
  background-color: #eee;
  color: #12405b;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
`

const PeriodDescription = ({ period, ...rest}) => {
  return (
    <StyledDescription {...rest}>
      Você está vendo o período <strong>{ period }</strong>
    </StyledDescription>
  )
}

export default PeriodDescription
