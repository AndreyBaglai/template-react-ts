import React from 'react'
import { Router, Switch, Route } from 'react-router'

import history from 'utils/history'
import Public from '../Public'

history.listen(() => {
  window.scrollTo(0, 0)  
})

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Public} />
        </Switch>
      </Router>
    </>
  )
}

export default App
