import React from 'react'
import { Router, Switch, Route } from 'react-router'
import history from 'utils/history'

import AppLoading from 'components/AppLoading'
import Public from '../Public'

const App = () => {
  return (
    <>
      <Router history={history}>
        <Switch>
          {/* <PrivateRoute roles={['admin']} path="/admin" component={Admin} /> */}
          <Route path="/" component={Public} />
        </Switch>
      </Router>
      <AppLoading />
    </>
  );
}

export default App;