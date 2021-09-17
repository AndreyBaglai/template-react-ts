import React, { useEffect, useState } from 'react'
import { Select, Button, Alert, message, notification } from 'antd'

import history from 'utils/history'
import { useStore } from 'stores'

import styles from './styles.module.scss'

const Login = () => {
  const usersStore = useStore().usersStore
  const { users } = usersStore
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    usersStore.getUsers()
  }, [])
  // state = {
  //   userId: null,
  //   loading: true,
  // }

  // componentDidMount = () => {
  //   if (this.props.user.id) return this.props.history.replace('/')

  //   this.loadUsers()
  // }

  // loadUsers = async () => {
  //   this.setState({ loading: true })
  //   let hideMessage = message.loading('Loading users list...')

  //   try {
  //     await usersActions.getUsers()
  //   } catch (e) {
  //     notification.open({
  //       message: 'Fetch users list error',
  //       description: e.message || e,
  //       icon: <Icon type="warning" style={{ color: 'red' }} />,
  //     })
  //   } finally {
  //     hideMessage()
  //     this.setState({ loading: false })
  //   }
  // }

  const onChangeUser = (userId: any) => {
    setUserId(userId)
  }
  
  const onClickSignIn = () => {
    if (!userId) {
      return message.info(`Please, select user`, 3)
    }

    const user = users.find((user: any) => user.id === userId)

    usersStore.setUser(user)
    history.replace('/')

    message.success(`Perfect! You signed in as ${user.name}`, 3)
    if (user.id === 1) {
      notification.open({
        message: 'Admin section',
        description: 'You have admin permissions. You can go to admin section using link "Admin section" in header',
        // icon: <Icon type="info-circle" style={{ color: '#108ee9' }} />,
      })
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        {/* <Icon type="login" className={styles.icon} /> */}
        <Alert message="Admin section available for Leanne Graham." type="info" className={styles.alert} />
        <Select
          className={styles.search}
          size="large"
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChangeUser}
          // value={this.state.userId || undefined}
          // filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {users.map((user: any) => (
            <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>
          ))}
        </Select>
        <Button type="primary" size="large" loading={false} onClick={onClickSignIn} block>
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default Login
