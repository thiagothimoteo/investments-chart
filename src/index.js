import React from 'react'
import ReactDOM from 'react-dom'
import { StateProvider } from './store'
import './index.css'
import App from './App'

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById('root')
)
