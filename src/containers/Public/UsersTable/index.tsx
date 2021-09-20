import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import _ from 'lodash'

import { Table } from 'antd'

import { useStore } from 'stores'

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
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Website',
    dataIndex: 'website',
    render: (website: any) => (
      <a href={website} target="_blank" key={_.uniqueId()}>
        {website}
      </a>
    ),
  },
]

const UsersTable = observer(() => {
  const usersStore = useStore().usersStore
  const { users } = usersStore

  useEffect(() => {
    usersStore.getUsers()
  }, [])

  const onChangeTable = (sorted: any) => {
    // console.log(sorted)
  }

  return <Table columns={columns} dataSource={users} pagination={false} onChange={onChangeTable}></Table>
})

export default UsersTable
