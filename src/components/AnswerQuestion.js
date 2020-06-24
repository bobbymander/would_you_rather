import React, { Component } from 'react'
import { connect } from 'react-redux'

class AnswerQuestion extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>AnswerQuestion</h3>
      </div>
    )
  }
}

function mapStateToProps ({}) {
  return {
  }
}

export default connect(mapStateToProps)(AnswerQuestion)
