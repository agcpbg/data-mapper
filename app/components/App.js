import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Header from './Header'
import Sidebar from './Sidebar'
import BuildRules from './BuildRules'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='container'>
            <Header />
            <div className="main-container">
              <Sidebar />
              <BuildRules />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
