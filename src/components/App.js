import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialRequest } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialRequest())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />

            {this.props.loading
              ? null
              : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/new' component={NewTweet} />
                <Route path='/tweet/:id' exact component={TweetPage} />
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default connect((store) => ({
  loading: store.authedUser === null
}))(App)