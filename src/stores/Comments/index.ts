import { observable, action, makeObservable } from 'mobx'

import { api } from 'config'

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable comments: any = []

  @action
  async getCommentsById(id = '1') {
    try {
      const { data } = await api.get(`comments?postId=${id}`)
      if (data) {
        this.comments = data;
      }  
    } catch (error) {
      console.log(error, 'error')
    }
  }
}

export default new Store()