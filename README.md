# would_you_rather Project

This React project provides a voting app from a collection of would you
rather questions that each provide an either or choice.

## Files

The following files have been modified or added to the starter project.  All are needed to run the app:
	public/:  Images of avatars
  src/actions/:  Actions for the various parts of the state
  src/components/:  The various components used
    Add Question.js:  The add new question page
    App.js:  The main router page that direct the flow for the user
    Leaderboard.js:  The user leaderboard page
    Login.js:  The initial login page
    Logout.js:  The logout button component
    Nav.js:  The top menu bar that lets you traverse the app
    QuestionDetails.js:  Shows the details of a particular question, either
      the stats summary or a prompt to vote on an answer
    Questions.js:  The main page showing the list of questions, either answered
      or unanswered
    QuestionSummary.js:  A high level card view of the question for use on the
      main page
    UserSummary.js:  A view of a user for use by the leaderboard
  src/middleware/:  Includes a thunk logger, nothing more
  src/reducers/:  Reducers for the various parts of the state
  src/utils/:
    _DATA.js:  Initial data and API code for our database
  index.css:  main stylesheet
  index.js:  Main js page required small modification to wrap the app in a BrowserRouter
  packages.json:  npm dependency information

## Installation

To install the app, use npm commands as below:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## State

The application state is represented by:

users:  full data for the users
questions:  full data for the questions
currentUser:  the id of the current user or null if not logged in
