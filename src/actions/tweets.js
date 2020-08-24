export const RECEIVE_TWEETS = 'RECEIEVE_TWEETS'

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  }
}