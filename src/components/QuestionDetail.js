import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleQuestionAnswer } from '../actions/shared'

class QuestionDetail extends Component {
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
    const { users, currentUser, question } = this.props

    if (question === null) {
      return <p>This question doesn't exist</p>
    }

    const answered = (question.id in users[currentUser].answers)
    const votes1 = question.optionOne.votes.length
    const votes2 = question.optionTwo.votes.length
    const votes = votes1 + votes2

    return (
      <div>
        {!answered &&
          <form onSubmit={this.handleSubmit}>
            <img
              src={`.${users[currentUser].avatarURL}`}
              alt={`Avatar of ${currentUser}`}
              className='avatar'
            />
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
          </form>}
          {answered &&
            <div>
              <h4>Already answered question summary</h4>
              <h5>Option 1:  {question.optionOne.text}</h5>
              <h5>Votes: {votes1}, Percentage: {votes1/votes * 100}%</h5>
              <h5>Option 2:  {question.optionTwo.text}</h5>
              <h5>Votes: {votes2}, Percentage: {votes2/votes * 100}%</h5>
            </div>
          }
        </div>
    )
  }
}

function mapStateToProps ({users, questions, currentUser}, ownProps) {
  console.log('own: ', ownProps, questions)
  return {
    currentUser,
    users,
    question: questions[ownProps.match.params.question_id],
    question_id: ownProps.match.params.question_id
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetail))
