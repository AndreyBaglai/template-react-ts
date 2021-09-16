import React from 'react'
import { Layout, Button, Avatar } from 'antd'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

const Header = () => {
  // const { user } = props

  return (
    <Layout.Header>
      {/* <div className={styles.header}>
        {user.id ? (
          <div className={styles.user}>
            <Avatar icon="user" className={styles.avatar} />
            <span>{user.name}</span>
            {user.id === 1 && (
              <span>
                &nbsp;
                <Link to="/admin">
                  <Button type="dashed" size="small">
                    Admin panel
                  </Button>
                </Link>
              </span>
            )}
            ,&nbsp;
            <span className={styles.signOut} onClick={usersActions.unsetUser}>
              sign out
            </span>
            .
          </div>
        ) : (
          <Link to="/login">
            <Button type="primary" icon="login">
              Sign In
            </Button>
          </Link>
        )}
      </div> */}
    </Layout.Header>
  )
}

export default Header;