import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Col, Input, Row, Table } from 'antd'
import { ColumnsType } from 'antd/es/table'
import { v4 as uuidv4 } from 'uuid'

import { useStore } from 'stores'
import { IUser } from 'types/User'

import styles from './styles.module.scss'

const columns: ColumnsType<IUser> = [
  {
    title: 'ID',
    dataIndex: 'id',
    sortDirections: ['ascend', 'descend'],
    sorter: (a: IUser, b: IUser) => a.id - b.id,
  },
  {
    title: 'Full name',
    dataIndex: 'name',
    sortDirections: ['ascend', 'descend'],
    sorter: (a: IUser, b: IUser) => a.name.localeCompare(b.name),
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
    render: (website: string) => (
      <a href={`http://${website}`} target="_blank" rel="noreferrer" key={uuidv4()}>
        {website}
      </a>
    ),
  },
]

const UsersTable = observer(() => {
  const { usersStore } = useStore()
  const { users } = usersStore

  const [dataSource, setDataSource] = useState<IUser[]>(users)

  useEffect(() => {
    usersStore.getUsers()
  }, [])

  useEffect(() => {
    setDataSource(users)
  }, [users])

  const onChangeFilterUsers = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const currValue = target.value.toLocaleLowerCase()

    const filteredData = users.filter(
      ({ name, username }: IUser) =>
        name.toLowerCase().includes(currValue) || username.toLowerCase().includes(currValue)
    )

    setDataSource(filteredData)
  }

  return (
    <div>
      <Row justify="center">
        <Col span={5} xs={20} sm={11} md={6} className={styles.wrapSearch}>
          <Input.Search
            placeholder="Search user by name"
            size="large"
            onSearch={() => {}}
            className={styles.search}
            onChange={onChangeFilterUsers}
          />
        </Col>
      </Row>

      <Table size="small" columns={columns} dataSource={dataSource} pagination={false}></Table>
    </div>
  )
})

export default UsersTable
