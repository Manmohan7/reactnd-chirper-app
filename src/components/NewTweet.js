import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const text = e.target.value

    this.setState(() => ({
      text,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text } = this.state
    const { dispatch, id } = this.props

    this.setState(() => ({
      text,
    }))

    dispatch(handleAddTweet(text, id))
    this.setState(() => ({
      text: ''
    }))
  }

  render() {
    const { text } = this.state

    const lengthLeft = 280 - text.length

    return (
      <div>
        <h3 className='center'>Compose New Tweet</h3>
        <form className='new-tweet' onSubmit={(event) => this.handleSubmit(event)}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={(e) => this.handleChange(e)}
            className='textarea'
            maxLength={280}
          />

          {lengthLeft <= 100 && (
            <div className='tweet-length'>
              {lengthLeft}
            </div>
          )}

          <button
            className='btn'
            type='submit'
            disabled={!text.length}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet)