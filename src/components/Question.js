import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Question</h3>
      </div>
    )
  }
}

function mapStateToProps ({}) {
  return {
  }
}

export default connect(mapStateToProps)(Question)
