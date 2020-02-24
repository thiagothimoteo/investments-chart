import React from 'react'

const Context = React.createContext({
  state: {},
  dispatch: () => {}
})

const { Provider } = Context

export default Context
export { Provider }
