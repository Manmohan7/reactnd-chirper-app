import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthUser } from './authedUser'

const AUTHED_ID = 'dan_abramov'

export function handleInitialRequest() {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, tweets }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthUser(AUTHED_ID))
      })
  }
}