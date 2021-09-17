import React from 'react'
import { Route, Redirect } from 'react-router'
import { message } from 'antd'
import PropTypes from 'prop-types'

const PrivateRoute = (props: any) => {
  let allow = false

  // here private logic ...
  // const userRoles = ['customer']
  // if (userRoles.some(userRole => props.roles.includes(userRole))) allow = true
  allow = props.user.id && props.user.id === 1

  // show a notification
  if (!allow) message.warning(props.message ? props.message : `You have not access to this page`)

  return allow ? <Route {...props} /> : <Redirect to={props.redirectTo ? props.redirectTo : '/'} />
}

PrivateRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  message: PropTypes.string,
  path: PropTypes.string,
  redirectTo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  component: PropTypes.any,
}

export default PrivateRoute