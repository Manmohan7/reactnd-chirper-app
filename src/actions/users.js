export const RECEIVE_USERS = 'RECEIEVE_USERS'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}