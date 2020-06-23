import React, { Component } from 'react'
import { connect } from 'react-redux'

class Questions extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Questions</h3>
      </div>
    )
  }
}

function mapStateToProps ({}) {
  return {
  }
}

export default connect(mapStateToProps)(Questions)
