import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Headers from 'Components/Header'
import About from 'Components/About'

const WrapperRouter = () => {
  console.log(123)
  return (
    <Router>
      <Headers />
      <Switch>
        <Route path='/'>
          <About />
        </Route>
      </Switch>
    </Router>
  )
}

export default WrapperRouter
