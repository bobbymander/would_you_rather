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

    if (question === null || question === undefined) {
      return (<div>404 Not found </div>)
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
              <h4>Votes Summary</h4>
              <table>
                <tbody>
                <tr>
                  <td>{question.optionOne.text}</td>
                  <td>
                    <div style={{'backgroundColor':'blue', 'width':`200px`}}>
                      {votes1} votes, {votes1/votes * 100}%
                      {users[currentUser].answers[question.id] === 'optionOne' &&
                        <span>    Your choice</span>}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>{question.optionTwo.text}</td>
                  <td>
                    <div style={{'backgroundColor':'green', 'width':`200px`}}>
                      {votes2} votes, {votes2/votes * 100}%
                      {users[currentUser].answers[question.id] === 'optionTwo' &&
                        <span>    Your choice</span>}
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
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
