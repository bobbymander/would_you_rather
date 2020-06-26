import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionSummary from './QuestionSummary'

class Questions extends Component {
  componentDidMount() {
    document.getElementById("defaultOpen").click()
  }

  openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  render() {
    const { answered, unanswered } = this.props

    return (
      <div>
        <div className="tab">
          <button className="tablinks"
            onClick={e => this.openTab(e, 'Unanswered')}
            id='defaultOpen'>
            Unanswered
          </button>
          <button className="tablinks" onClick={e => this.openTab(e, 'Answered')}>
            Answered
          </button>
        </div>
        <div id="Unanswered" className="tabcontent">
          {unanswered.map((entry) => (
            <QuestionSummary key={entry[1].id} id={entry[1].id} />
          ))}
        </div>
        <div id="Answered" className="tabcontent">
          {answered.map((entry) => (
            <QuestionSummary key={entry[1].id} id={entry[1].id} />
          ))}
        </div>

      </div>
    )
  }
}

function mapStateToProps ({questions, currentUser}) {
  console.log('ques: ', Object.entries(questions))
  const answered = Object.entries(questions).filter(
    question => question[1].optionOne.votes.includes(currentUser) ||
    question[1].optionTwo.votes.includes(currentUser))
  const unanswered = Object.entries(questions).filter(
    question => !(question[1].optionOne.votes.includes(currentUser) ||
    question[1].optionTwo.votes.includes(currentUser)))

  return {
    answered: answered.sort((a, b) => b[1].timestamp - a[1].timestamp),
    unanswered: unanswered.sort((a, b) => b[1].timestamp - a[1].timestamp)
  }
}

export default connect(mapStateToProps)(Questions)
