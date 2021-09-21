import React from 'react'
import { Col, Input, Row } from 'antd'

import styles from './styles.module.scss'

interface IProps {
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSearch: React.FC<IProps> = ({ placeholder, onChange }) => {
  return (
    <Row justify="center">
      <Col span={5} xs={20} sm={11} md={6} className={styles.wrapSearch}>
        <Input.Search
          placeholder={placeholder}
          size="large"
          onSearch={() => {}}
          className={styles.search}
          onChange={onChange}
        />
      </Col>
    </Row>
  )
}

export default InputSearch
