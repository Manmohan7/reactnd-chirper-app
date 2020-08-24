import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialRequest } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialRequest())
  }

  render() {
    return (
      <div>
        {
          this.props.loading
          ? null
          : <Dashboard />
        }
      </div>
    )
  }
}

export default connect((store) => ({
  loading: store.authedUser === null
}))(App)