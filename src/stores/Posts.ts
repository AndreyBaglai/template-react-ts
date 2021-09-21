import { observable, action, makeObservable } from 'mobx'

import { IPost } from 'types/Post'
import { api } from 'config'

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable posts: IPost[] = []
  @observable post: IPost | null = null
  @observable postsOnPage: IPost[] = []
  @observable postsByUser: IPost[] = []

  @action
  async getPostsByPage(page: number, limit: number) {
    try {
      const { data } = await api.get(`posts?_page=${page}&_limit=${limit}`)
      if (data) {
        this.postsOnPage = data
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  async getPosts() {
    try {
      const { data } = await api.get('posts')
      if (data) {
        this.posts = data
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  async getPost(id = '1') {
    try {
      const { data } = await api.get(`posts/${id}`)
      if (data) {
        this.post = data
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  @action
  async getPostsByUser(id = '1') {
    try {
      const { data } = await api.get(`posts?userId=${id}`)
      if (data) {
        this.postsByUser = data
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }
}

export default new Store()
