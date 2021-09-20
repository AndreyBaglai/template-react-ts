import React, { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router'

import history from 'utils/history'
import { useStore } from 'stores'

import PrivateRoute from 'components/PrivateRoute'
import Public from '../Public'
import Admin from '../Admin'

const App = () => {
  const { usersStore } = useStore()

  useEffect(() => {
    usersStore.authUser()
  }, [])

  return (
    <>
      <Router history={history}>
        <Switch>
          <PrivateRoute roles={['admin']} path="/admin" component={Admin} />
          <Route path="/" component={Public} />
        </Switch>
      </Router>
    </>
  )
}

export default App
