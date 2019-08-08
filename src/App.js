import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import AboutMe from './containers/AboutMe'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AboutMe />
      </Provider>
    )
  }
}
