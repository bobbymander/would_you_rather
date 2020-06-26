import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleQuestionAnswer } from '../actions/shared'

class AnswerQuestion extends Component {
  state = {
    selection: null
  }

  handleChange = (e) => {
    const selection = e.target.value

    this.setState(() => ({
      selection
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { selection } = this.state
    const { dispatch, currentUser, question_id } = this.props

    console.log('submit: ', currentUser, question_id, selection)

    dispatch(handleQuestionAnswer(currentUser, question_id, selection))

    this.setState(() => ({
      selection: null
    }))
  }

  render() {
    const { question, question_id } = this.props

    if (question === null) {
      return <p>This question doesn't exist</p>
    }

    console.log('answer: ', question, question_id)
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Would you rather?</h3>
        <label>
          <input type='radio' id='one' name='options' value='optionOne'
            onChange={this.handleChange}/>
          {question.optionOne.text}
        </label>
        <label>
          <input type='radio' id='two' name='options' value='optionTwo'
            onChange={this.handleChange}/>
          {question.optionTwo.text}
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

function mapStateToProps ({questions, currentUser}, ownProps) {
  console.log('own: ', ownProps, questions)
  return {
    currentUser,
    question: questions[ownProps.match.params.question_id],
    question_id: ownProps.match.params.question_id
  }
}

export default withRouter(connect(mapStateToProps)(AnswerQuestion))
