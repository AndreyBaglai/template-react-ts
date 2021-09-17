import { observable, action, makeObservable } from 'mobx'
import history from 'utils/history'

import { api } from 'config'

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable users: any = []
  @observable user: any = {}

  @action
  sortByField(field: string, order: string) {
    const sortedUsers = this.users.sort((user1: any, user2: any) => order === 'ASC' ? user1[field] - user2[field] : user2[field] - user2[field])
    this.users = [...sortedUsers]
  }

  @action
  async getUsers() {
    try {
      const { data } = await api.get('users')
      if (data) {
        this.users = data
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
  setUser(user: any) {
    this.user = user
    localStorage.setItem('user', JSON.stringify(user))
  }

  @action
  unsetUser() {
    this.user = {}
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
