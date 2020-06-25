import React, { Component } from 'react'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    const { leaderboard } = this.props

    console.log(leaderboard)
    return (
      <div>
        <h3 className='center'>Leaderboard</h3>
          {leaderboard.map((entry) => (
            <ul key={entry.id}>
              <li key={entry.id}>{entry.id}
                <ul>
                  <li key={`${entry.id}name`}>{entry['name']}</li>
                  <li key={`${entry.id}url`}>{entry['avatarURL']}</li>
                  <li key={`${entry.id}asked`}>Asked: {entry['numAsked']}</li>
                  <li key={`${entry.id}answered`}>Answered: {entry['numAnswered']}</li>
                  <li key={`${entry.id}total`}>Total: {entry['total']}</li>
                </ul>
              </li>
            </ul>
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
