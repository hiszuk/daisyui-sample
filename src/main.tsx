import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { RootRouter } from './Route'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
      {/* <App /> */}
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
