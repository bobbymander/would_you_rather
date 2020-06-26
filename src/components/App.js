import React, { Component, Fragment }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import Login from './Login'
import Questions from './Questions'
import AddQuestion from './AddQuestion'
import Leaderboard from './Leaderboard'
import QuestionDetail from './QuestionDetail'
import Logout from './Logout'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.currentUser === null ?
              <div className="App">
                <Switch>
                  <Route path='/logout' component={Logout} />
                  <Route path='/' component={Login} />
                </Switch>
              </div>
              :
              <div className="App">
                <Route path='/' exact component={Questions} />
                <Route path='/add' component={AddQuestion} />
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/questions/:question_id' component={QuestionDetail} />
                <Route path='/logout' component={Logout} />
              </div>
            }
          </div>

        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({currentUser}) {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(App)
