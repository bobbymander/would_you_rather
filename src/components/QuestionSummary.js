import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionSummary extends Component {
  render() {
    const { users, question, id } = this.props

    if (question === null) {
      return (<p>This question doesn't exist.</p>)
    }

    // get the avatar avatarURL
    const userId = question[0][1].author
    const url = Object.entries(users).filter(user => user[0] === userId)[0][1].avatarURL

    return (
      <Link to={`/questions/${id}`} className='question'>
        <div>
          <img
            src={url}
            alt={`Avatar of ${userId}`}
            className='avatar'
          />
          <span>{question[0][1].author}</span>
          <h5 className='center'>Would you rather?</h5>
          <ul>
            <li key={`${question[0][0]}op1`}>{question[0][1].optionOne.text}</li>
            <li key={`${question[0][0]}op2`}>{question[0][1].optionTwo.text}</li>
         </ul>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({users, questions}, {id}) {
  return {
    users,
    question: Object.entries(questions).filter(
      question => question[1].id === id)
  }
}

export default connect(mapStateToProps)(QuestionSummary)
