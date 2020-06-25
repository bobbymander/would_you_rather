import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Questions extends Component {
  render() {
    const { answered, unanswered } = this.props

    console.log('home: ', answered, unanswered)
    return (
      <div>
        <h3 className='center'>Questions Unanswered</h3>
        {unanswered.map((entry) => (
          <Question key={entry[1].id} id={entry[1].id} />
        ))}
        <h3 className='center'>Questions Answered</h3>
        {answered.map((entry) => (
          <Question key={entry[1].id} id={entry[1].id} />
        ))}
      </div>
    )
  }
}

function mapStateToProps ({questions, currentUser}) {
  console.log('ques: ', Object.entries(questions))
  const answered = Object.entries(questions).filter(
    question => question[1].optionOne.votes.includes(currentUser) ||
    question[1].optionTwo.votes.includes(currentUser))
  const unanswered = Object.entries(questions).filter(
    question => !(question[1].optionOne.votes.includes(currentUser) ||
    question[1].optionTwo.votes.includes(currentUser)))

  return {
    answered: answered.sort((a, b) => b[1].timestamp - a[1].timestamp),
    unanswered: unanswered.sort((a, b) => b[1].timestamp - a[1].timestamp)
  }
}

export default connect(mapStateToProps)(Questions)
