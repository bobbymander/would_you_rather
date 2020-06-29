import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserSummary extends Component {
  render() {
    const { entry } = this.props

    return (
      <div className='userSummary'>
        <div className='userleft'>
          <img
            src={entry.avatarURL}
            alt={`Avatar of ${entry.name}`}
            className='avatar'
          />
          <span>{entry['name']}</span>
          <ul key={entry.id}>
            <li key={`${entry.id}asked`}>Asked: {entry['numAsked']}</li>
            <li key={`${entry.id}answered`}>Answered: {entry['numAnswered']}</li>
          </ul>
        </div>
        <div className='userright'>
          <span className='numberCircle'>{entry.total}</span>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({}) {
  return {
  }
}

export default connect(mapStateToProps)(UserSummary)
