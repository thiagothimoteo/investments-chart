import React, { useReducer } from 'react'
import { reducer, initialState } from './reducer'

const store = React.createContext({
  state: {},
  dispatch: () => {}
})

const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export default store
export { StateProvider }
