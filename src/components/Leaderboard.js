import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSummary from './UserSummary'

class Leaderboard extends Component {
  render() {
    const { leaderboard } = this.props

    return (
      <div>
        <h3 className='center'>Leaderboard</h3>
          {leaderboard.map((entry) => (
            <UserSummary key={entry.id} entry={entry} />
          ))}
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  let leaderboard = Object.entries(users).map((user) => {
    let entry = {}
    entry['id'] = user[1]['id']
    entry['name'] = user[1]['name']
    entry['avatarURL'] = user[1]['avatarURL']
    entry['numAsked'] = user[1]['questions'].length
    entry['numAnswered'] = Object.entries(user[1]['answers']).length
    entry['total'] = entry['numAsked'] + entry['numAnswered']
    return entry
  })

  return {
    leaderboard: leaderboard.sort((a, b) => b['total'] - a['total'])
  }
}

export default connect(mapStateToProps)(Leaderboard)
