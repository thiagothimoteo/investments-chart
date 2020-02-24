import React, { useContext } from 'react'
import styled from 'styled-components';
import Context from '../../Context';
import { periods } from '../../constants'

const StyledDescription = styled.div`
  background-color: #eee;
  color: #12405b;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
`

const PeriodDescription = (props) => {
  const { state } = useContext(Context)

  return (
    <StyledDescription {...props}>
      Você está vendo o período <strong>{ periods[state.period] }</strong>
    </StyledDescription>
  )
}

export default PeriodDescription
