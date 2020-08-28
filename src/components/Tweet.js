import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet, formatDate } from '../utils/helpers'

import { handleToggle } from '../actions/tweets'

import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti'

class Tweet extends Component {
  toParent = (e, parentId) => {
    e.preventDefault()
  }

  handleLike = (e) => {
    e.preventDefault()

    const { dispatch, tweet, authedUser } = this.props

    dispatch(handleToggle({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }))
  }

  render() {
    const {tweet} = this.props

    if(tweet === null) {
      return <p> This tweet does not exist </p>
    }

    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, parent
    } = tweet

    return (
      <div className='tweet'>
        <img
          src={avatar}
          alt={`Name of avatar is ${name}`}
          className='avatar'
        />

        <div className='tweet-info'>
          <div>
            <span> {name} </span>
            <div> {formatDate(timestamp)} </div>
            {parent && (
              <button
                className='replying-to'
                onClick={(e) => this.toParent(e, parent.id)}
              >
                Replying to @ {parent.author}
              </button>
            )}
            <p> {text} </p>
          </div>
          <div className='tweet-icons'>
              <TiArrowBackOutline className='tweet-icon' />
              <span> {replies !== 0 && replies} </span>
              <button className='heart-button' onClick={(e) => this.handleLike(e)}>
                {hasLiked
                  ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                  : <TiHeartOutline className='tweet-icon' />
                }
              </button>
              <span> {likes !== 0 && likes} </span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStoreToProp = ({ authedUser, users, tweets }, { id }) => {
  let tweet = tweets[id]
  let parent = tweet
    ? tweets[tweet.replyingTo]
    : null

  return {
    authedUser,
    tweet: tweet
    ? formatTweet(tweet, users[tweet.author], authedUser, parent)
    : null
  }
}

export default connect(mapStoreToProp)(Tweet)