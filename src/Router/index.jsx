import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import About from 'Components/About'

const WrapperRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default WrapperRouter
