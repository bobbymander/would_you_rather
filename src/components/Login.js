import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../actions/currentUser'

class Login extends Component {
  state = {
    selectedUser: ''
  }

  handleChange = (e) => {
    const selectedUser = e.target.value

    this.setState(() => ({
      selectedUser
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { selectedUser } = this.state
    const {dispatch} = this.props

    dispatch(setCurrentUser(selectedUser))
  }

  render() {
    const {selectedUser} = this.state
    const {users} = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Please Login
          <br/>
          <br/>
            <select required value={selectedUser} onChange={this.handleChange}>
              <option disabled hidden defaultValue=''></option>
              {Object.entries(users).map((user) => (
                <option key={user[1].id} value={user[1].id}>{user[1].name}</option>
              ))}
            </select>
          </label>
          <br/>
          <br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

function mapStateToProps ({users}) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(Login)
