import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../actions/currentUser'

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch(setCurrentUser(null))
  }

  render() {
    return (
      <div>
        <h3 className='center'>Thank you for using our app.  Goodbye.</h3>
      </div>
    )
  }
}

function mapStateToProps ({currentUser}) {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Logout)
