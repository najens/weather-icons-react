import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path='/weather-icons-react/' exact
            component={Dashboard}
          />
        </Switch>
      </Router>
    )
  }
}

export default App
