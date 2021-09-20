import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import _ from 'lodash'
import { Col, Input, Row, Table } from 'antd'

import { useStore } from 'stores'

import styles from './styles.module.scss'

const columns: any = [
  {
    title: 'ID',
    dataIndex: 'id',
    sortDirections: ['ascend', 'descend'],
    sorter: (a: any, b: any) => a.id - b.id,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    sortDirections: ['ascend', 'descend'],
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
  },
  {
    title: 'User name',
    dataIndex: 'username',
    responsive: ['md'],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    responsive: ['sm'],
  },
  {
    title: 'Website',
    dataIndex: 'website',
    responsive: ['md'],
    showOnResponse: false,
    render: (website: any) => (
      <a href={website} target="_blank" key={_.uniqueId()}>
        {website}
      </a>
    ),
  },
]

const UsersTable = observer(() => {
  const { usersStore } = useStore()
  const { users } = usersStore

  const [dataSource, setDataSource] = useState(users)

  useEffect(() => {
    usersStore.getUsers()
  }, [])

  useEffect(() => {
    setDataSource(users)
  }, [users])

  const onChangeTable = (sorted: any) => {}

  const onChangeFilterUsers = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const currValue = target.value.toLocaleLowerCase()
    const filteredData = users.filter((user: any) => {
      const name = user.name.toLowerCase()
      return name.indexOf(currValue) > -1
    })

    setDataSource(filteredData)
  }

  return (
    <div>
      <Row>
        <Col span={8} offset={2} sm={{ offset: 8 }}>
          <Input.Search
            placeholder="Search user by name"
            size="large"
            onSearch={() => {}}
            className={styles.search}
            onChange={onChangeFilterUsers}
          />
        </Col>
      </Row>

      <Table size="small" columns={columns} dataSource={dataSource} pagination={false} onChange={onChangeTable}></Table>
    </div>
  )
})

export default UsersTable
