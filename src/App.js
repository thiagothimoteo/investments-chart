import React, { useReducer } from 'react';
import { Provider } from './Context'
import { reducer, initialState } from './reducer'
import { MainContainer } from './containers/MainContainer';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <Provider value={value}>
      <MainContainer />
    </Provider>
  );
}

export default App;
