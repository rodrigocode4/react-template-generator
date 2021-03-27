import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/"></Route>
        <Route>
          <Redirect from="*" to="/" />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
