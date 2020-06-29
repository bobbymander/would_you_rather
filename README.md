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
  src/utils/_DATA.js:  Initial data and API code for our database
  index.css:  main stylesheet
  index.js:  Main js page required small modification to wrap the app in a BrowserRouter
  packages.json:  npm dependency information

## Installation

To install the app, use npm commands as below:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## The remainder of this README describes the starter files and API

## What You're Getting
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
