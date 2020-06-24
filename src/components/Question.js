import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { users, question, id } = this.props

    if (question === null) {
      return (<p>This question doesn't exist.</p>)
    }

    // get the avatar avatarURL
    const userId = question[0][1].author
    const url = Object.entries(users).filter(user => user[0] === userId)[0][1].avatarURL

    return (
      <div>
        <h5 className='center'>Question {id}:  Would you rather?</h5>
        <img
          src={url}
          alt={`Avatar of ${userId}`}
          className='avatar'
        />
        <ul>
          <li key={`${question[0][0]}author`}>{question[0][1].author}</li>
          <li key={`${question[0][0]}op1`}>{question[0][1].optionOne.text}</li>
          <li key={`${question[0][0]}op2`}>{question[0][1].optionTwo.text}</li>
       </ul>
      </div>
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

export default connect(mapStateToProps)(Question)
