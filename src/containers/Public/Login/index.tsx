import React, { useEffect, useState } from 'react'
import { Select, Button, Alert, message, notification } from 'antd'

import history from 'utils/history'
import { useStore } from 'stores'
import { IUser } from 'types/User'

import styles from './styles.module.scss'

const Login = () => {
  const { usersStore } = useStore()
  const { users } = usersStore
  
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    usersStore.getUsers()
  }, [])

  const onChangeUser = (userId: number) => {
    setUserId(userId)
  }

  const onClickSignIn = () => {
    if (!userId) {
      return message.info(`Please, select user`, 3)
    }

    const user = users.find((user: IUser) => user.id === userId) || null

    usersStore.setUser(user)
    history.replace('/')

    if (user) {
      message.success(`Perfect! You signed in as ${user.name}`, 3)
      if (user.id === 1) {
        notification.open({
          message: 'Admin section',
          description: 'You have admin permissions. You can go to admin section using link "Admin section" in header',
        })
      }
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.form}>
        <Alert message="Admin section available for Leanne Graham." type="info" className={styles.alert} />
        <Select
          className={styles.search}
          size="large"
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChangeUser}
        >
          {users.map(({ id, name }: IUser) => (
            <Select.Option key={id} value={id}>
              {name}
            </Select.Option>
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
