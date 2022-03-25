import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RootRouter } from './Route'
import { RecoilRoot } from 'recoil'
import 'windi.css'

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
