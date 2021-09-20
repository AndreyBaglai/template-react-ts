import React from 'react'
import { Switch, Route, withRouter } from 'react-router'
import { Layout } from 'antd'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Posts from './Posts'
import Post from './Post'
import Login from './Login'
import UsersTable from './UsersTable'

import styles from './styles.module.scss'

const Public = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout.Content className={styles.content}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/post/:id" component={withRouter(Post)} />
          <Route path="/table" component={UsersTable} />
          <Route path="/" component={Posts} />
        </Switch>
      </Layout.Content>
      <Footer />
    </Layout>
  )
}

export default Public
