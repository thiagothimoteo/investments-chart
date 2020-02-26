import React, { useContext } from 'react'
import styled from 'styled-components'
import store from '../../store'
import { Description, Select } from '../../components'
import { periods, icons } from '../../constants'

const setSelectOptions = () => {
  return Object.keys(periods).map(value => ({
      value,
      text: periods[value]
    })
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 2rem;
  }

  > *:first-child{
    align-self: flex-end;
  }
`

const PeriodContainer = () => {
  const selectOptions = setSelectOptions()
  const { state, dispatch } = useContext(store)
  const { period } = state

  const handlePeriodChange = selectedPeriod => {
    localStorage.setItem('period', selectedPeriod)
    dispatch({ type: 'change_period', payload: selectedPeriod })
    dispatch({ type: `filter_by_${selectedPeriod}`})
  }

  return (
    <StyledHeader>
      <Select value={period} options={selectOptions} onChange={handlePeriodChange} />
      <Description role="heading" icon={icons.calendar}>
        Você está vendo o período <strong>{ periods[period] }</strong>
      </Description>
    </StyledHeader>
  )
}

export default PeriodContainer
