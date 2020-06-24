import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const { currentUser } = this.props

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
          <NavLink to='/add' activeClassName='active'>Add Question</NavLink>
          </li>
          <li>
          <NavLink to='/leaderboard' activeClassName='active'>Leaderboard</NavLink>
          </li>
          <li>
          <NavLink to='/logout' activeClassName='active'>Logout</NavLink>
          </li>
          {currentUser ?
            (<li>
              Hello {currentUser}
            </li>) :
            null}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({currentUser}) {
  return {
    currentUser,
  }
}

export default connect(mapStateToProps)(Nav)
