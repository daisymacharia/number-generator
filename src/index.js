import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider>
    <div>Random Number Generator</div>
  </Provider>,
  document.getElementById('root')
)
