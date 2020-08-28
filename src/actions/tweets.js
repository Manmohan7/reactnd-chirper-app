import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIEVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}

function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  }
}

export function handleToggle(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info))

    return saveLikeToggle(info)
      .catch(() => {
        dispatch(toggleTweet(info))
        alert('Some eroor in liking the tweet.')
      })
  }
}