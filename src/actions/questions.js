import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion, _saveQuestionAnswer, _getQuestions } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

function addQuestion (question) {
  console.log('addQuestion: ', question)
  return {
    type: ADD_QUESTION,
    question,
  }
}

function addAnswer (question) {
  return {
    type: ADD_ANSWER,
    question,
  }
}

export function handleAddAnswer(question, userId, answer) {
  return (dispatch, getState) => {
    const { currentUser } = getState()

    dispatch(showLoading())

    return _saveQuestionAnswer({
      qid: question.id,
      answer,
      authedUser: currentUser,
    })
      .then((question) => dispatch(addAnswer(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleAddQuestion(optionOneText, optionTwoText, currentUser) {
  return (dispatch, getState) => {
    dispatch(showLoading())

    console.log('handle:', optionOneText, optionTwoText, currentUser)
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: currentUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function refreshQuestions () {
  return Promise.all([
    _getQuestions(),
  ]).then(([questions]) => ({
    questions,
  }))
}

export function handleQuestionUpdates () {
  return (dispatch) => {
    dispatch(showLoading())
    return refreshQuestions()
      .then(({questions}) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
