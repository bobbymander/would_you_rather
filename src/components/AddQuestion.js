import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddQuestion extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>AddQuestion</h3>
      </div>
    )
  }
}

function mapStateToProps ({}) {
  return {
  }
}

export default connect(mapStateToProps)(AddQuestion)
