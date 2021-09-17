import React, { useEffect } from 'react'
import { Router, Switch, Route } from 'react-router'
import history from 'utils/history'

import AppLoading from 'components/AppLoading'
import PrivateRoute from 'components/PrivateRoute'
import Public from '../Public'
import Admin from '../Admin'
import { useStore } from 'stores'

const App = () => {
  const usersStore = useStore().usersStore

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
      {/* <AppLoading /> */}
    </>
  );
}

export default App;