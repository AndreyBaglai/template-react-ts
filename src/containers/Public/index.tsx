import React from 'react'
import { Switch, Route } from 'react-router'
import { Layout } from 'antd'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Posts from './Posts'

import styles from './styles.module.scss'

const Public = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout.Content className={styles.content}>
        <Posts />
      </Layout.Content>
      <Footer />
    </Layout>
  )
}

export default Public;