import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { handleUserUpdates } from '../actions/users'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  handleChangeOne = (e) => {
    const optionOneText = e.target.value

    this.setState(() => ({
      optionOneText
    }))
  }

  handleChangeTwo = (e) => {
    const optionTwoText = e.target.value

    this.setState(() => ({
      optionTwoText
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch, currentUser } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText, currentUser))
    dispatch(handleUserUpdates())

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
    }))
  }

  render() {
    const { optionOneText, optionTwoText } = this.state

    return (
      <div>
        <h3 className='center'>Would you rather?</h3>
        <form className='add-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Option 1"
            value={optionOneText}
            onChange={this.handleChangeOne}
            className='textarea'
          />
          <br/>
          or
          <br/>
          <textarea
            placeholder="Option 2"
            value={optionTwoText}
            onChange={this.handleChangeTwo}
            className='textarea'
          />
          <br/>
          <button
            className='btn'
            type='submit'
            disabled={optionOneText === '' && optionTwoText === ''}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({users, currentUser}) {
  return {
    users,
    currentUser
  }
}

export default connect(mapStateToProps)(AddQuestion)
