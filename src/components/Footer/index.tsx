import React from 'react'
import { Layout, Typography } from 'antd'

import styles from './styles.module.scss'

const Footer = () => (
  <Layout.Footer className={styles.footer}>
    <Typography.Text>Application template footer &copy;</Typography.Text>
  </Layout.Footer>
)

export default Footer
