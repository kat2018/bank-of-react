import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <Router>
        <Switch>
          {/* when you read this, do this */}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App
