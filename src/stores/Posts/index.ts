import { observable, action, makeObservable } from 'mobx'

import { api } from 'config'

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable posts: any = []

  @action
  async getPosts() {
    try {
      const { data } = await api.get('posts');
      if (data) {
        this.posts = data;
      }  
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  async getPost(id = 1) {
    try {
      const { data } = await api.get(`posts/${id}`);
      if (data) {
        return data;
      }  
    } catch (error) {
      console.log(error, 'error')
    }
  }
}

export default new Store()