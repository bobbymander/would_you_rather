import { showLoading, hideLoading } from 'react-redux-loading'
import { _getUsers, _getQuestions, _saveQuestionAnswer } from '../utils/_DATA'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setCurrentUser } from '../actions/currentUser'

const CURRENT_USER = null

function getInitialData () {
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


function saveQuestionAnswer(authedUser, qid, answer) {
  return Promise.all([
    _saveQuestionAnswer(authedUser, qid, answer),
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function handleQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer(authedUser, qid, answer)
      .then(({users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
