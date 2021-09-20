import React from 'react'
import { Layout, Button, Avatar, message, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import { LoginOutlined, OrderedListOutlined, TableOutlined } from '@ant-design/icons'

import { useStore } from 'stores'

import styles from './styles.module.scss'
import classNames from 'classnames'

const Header = () => {
  const usersStore = useStore().usersStore
  const { user } = usersStore

  const onClickSignOut = () => {
    usersStore.unsetUser()
    message.success('Goodbye! You sign out', 3)
  }

  return (
    <Layout.Header>
      <Row className={styles.header} justify="center" align="top">
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
            <span className={styles.signOut} onClick={onClickSignOut}>
              Sign Out
            </span>
            .
          </div>
        ) : (
          <>
            {/* <Col span={6} push={1}>
              <Link to="/login">
                <Button type="primary" icon={<LoginOutlined />} className={styles.btn}>
                  Sign In
                </Button>
              </Link>
            </Col> */}

            <Col span={11} push={1}>
              <Link to="/">
                <Button type="primary" icon={<OrderedListOutlined />} className={styles.btn}>
                  Posts
                </Button>
              </Link>
            </Col>

            <Col span={11} push={1}>
              <Link to="/table">
                <Button type="primary" icon={<TableOutlined />} className={styles.btn}>
                  Users table
                </Button>
              </Link>
            </Col>
          </>
        )}
      </Row>
    </Layout.Header>
  )
}

export default Header
