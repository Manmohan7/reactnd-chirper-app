import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialRequest } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialRequest())
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

export default connect()(App)