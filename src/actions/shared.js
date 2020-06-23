import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setCurrentUser } from '../actions/currentUser'

const CURRENT_USER = null

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setCurrentUser(CURRENT_USER))
        dispatch(hideLoading())
      })
  }
}
