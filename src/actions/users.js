import { _getUsers } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

function refreshUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}

export function handleUserUpdates () {
  return (dispatch) => {
    dispatch(showLoading())
    return refreshUsers()
      .then(({users}) => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}
