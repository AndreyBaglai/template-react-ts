import { observable, action, makeObservable } from 'mobx'
import history from 'utils/history'

import { IUser } from 'types/User'
import { api } from 'config'

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable users: IUser[] = []
  @observable user: IUser | null = null

  @action
  async getUsers() {
    try {
      const { data } = await api.get('users')
      if (data) {
        this.users = data.map((user: IUser) => ({ ...user, key: user.id }))
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  async getUser(id = '1') {
    try {
      const { data } = await api.get(`users/${id}`)
      if (data) {
        this.user = data
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  setUser(user: IUser | null) {
    this.user = user
    localStorage.setItem('user', JSON.stringify(user))
  }

  @action
  unsetUser() {
    this.user = null
    localStorage.removeItem('user')
    history.replace('/')
  }

  @action
  authUser() {
    try {
      const userData = localStorage.getItem('user')
      if (userData) {
        let user = JSON.parse(userData)
        this.setUser(user)
      }
    } catch (e) {
      return null
    }
  }
}

export default new Store()
