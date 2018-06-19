import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";
import UserProfile from "./components/UserProfile"
import LogIn from "./components/LogIn"

class App extends Component {
  state = {
    balance: 400,
    currentUser: {
      userName: 'Bojangles KFC',
      memberSince: 'aught 8'
    }
  }

  updateUserInformation = (newUser) => {
    //take update user and put in my currentUser ^
    const tempUser = {...this.state.currentUser}
    //change state
    tempUser.userName = newUser.userName
    //set the state
    console.log("About to set state with user: ", tempUser)
    this.setState({ currentUser: tempUser })
  }

  

  render() {
    const HomeComponent = () => (
      <Home balance={this.state.balance} />
    )

    const UserProfileComponent = () => (
      <UserProfile 
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    )

    const logInComponent = () => (
      <LogIn updateUserInformation={this.updateUserInformation} />
    )

    return <Router>
        <Switch>
          {/* when you read this, do this */}
          <Route exact path="/logIn" render={logInComponent} />

          <Route exact path="/userProfile" render={UserProfileComponent} />

          <Route path="/" render={HomeComponent} />
        </Switch>
      </Router>;
  }
}

export default App
