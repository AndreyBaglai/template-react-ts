import React, { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router'

import history from 'utils/history'
import { useStore } from 'stores'

import Public from '../Public'

history.listen(_ => {
  window.scrollTo(0, 0)  
})

const App = () => {
  const { usersStore } = useStore()

  useEffect(() => {
    usersStore.authUser()
  }, [])

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
