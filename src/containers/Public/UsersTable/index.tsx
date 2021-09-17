import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { Table} from 'antd'

import { useStore } from 'stores'

const UsersTable = observer(() => {
  const usersStore = useStore().usersStore
  const { users } = usersStore

  useEffect(() => {
    usersStore.getUsers()
  }, [])

  const onChangeTable = (sorted: any) => {
    console.log(sorted)
  }
  
  return (
    <Table dataSource={users} pagination={false} onChange={onChangeTable} >
      <Table.Column title="ID" dataIndex="id" key="id" sorter={(a: any, b: any) => a.age - b.age} />
      <Table.Column title="Name" dataIndex="name" key="name" sorter={(a: any, b: any) => a.age - b.age} />
      <Table.Column title="User name" dataIndex="username" key="username" />
      <Table.Column title="Email" dataIndex="email" key="email" />
      <Table.Column title="Website" dataIndex="website" key="website" render={(website) => <a href={website} target="_blank">{website}</a>}/>
    </Table>
  )
})

export default UsersTable