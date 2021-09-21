import React from 'react'
import { Layout, Row } from 'antd'
import { OrderedListOutlined, TableOutlined } from '@ant-design/icons'

import HeaderButton from './Button'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <Layout.Header>
      <Row className={styles.header} justify="space-between" align="top">
        <>
          <HeaderButton path={'/'} icon={<OrderedListOutlined />}>
            Posts
          </HeaderButton>

          <HeaderButton path={'/table'} icon={<TableOutlined />}>
            Users table
          </HeaderButton>
        </>
      </Row>
    </Layout.Header>
  )
}

export default Header
