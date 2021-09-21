import React from 'react'
import { Col, Button } from 'antd'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'

interface IProps {
  path: string
  icon: any
}

const HeaderButton: React.FC<IProps> = ({ path, icon, children }) => {
  return (
    <Col span={12} className={styles.wrapBtn}>
      <Link to={path}>
        <Button type="primary" icon={icon} className={styles.btn}>
          {children}
        </Button>
      </Link>
    </Col>
  )
}

export default HeaderButton
