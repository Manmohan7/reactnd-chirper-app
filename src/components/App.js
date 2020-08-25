import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialRequest } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialRequest())
  }

  render() {
    return (
      <div>
        <LoadingBar />
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