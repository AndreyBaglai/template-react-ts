import React, { useEffect, useState } from 'react'
import { observer } from "mobx-react-lite"
import { notification, Empty, Button, Input, Row, Col, message } from 'antd'

import { useStore } from 'stores'
import PostCard from './PostCard'

import styles from './styles.module.scss'

const Posts = observer(() => {
  const postsStore = useStore().postsStore
  const { posts } = postsStore
  useEffect(() => {
    postsStore.getPosts()
  }, [])
  // loadPosts = async () => {
  //   let hideMessage = message.loading('Loading posts list...')

  //   try {
  //     let posts = await postsActions.getPosts()
  //     this.setState({ posts })
  //   } catch (e) {
  //     notification.open({
  //       message: 'Fetch list error',
  //       description: e.message || e,
  //       icon: <Icon type="warning" style={{ color: 'red' }} />,
  //     })
  //   } finally {
  //     hideMessage()
  //   }
  // }

  // onClickLoad = () => {
  //   this.setState({ search: '' }, () => {
  //     this.loadPosts()
  //   })
  // }

  // filterPosts = () => {
  //   let { search, posts } = this.state
  //   if (search === '') return posts

  //   search = search.toLowerCase()

  //   return posts.filter(post => {
  //     let title = post.title.toLowerCase()
  //     let body = post.body.toLowerCase()

  //     return title.indexOf(search) > -1 || body.indexOf(search) > -1
  //   })
  // }

    return (
      <div>
        <Row>
          <Col span={8} offset={8}>
            <Input.Search
              placeholder="Search by post name and description"
              size="large"
              onSearch={value => console.log(value)}
              className={styles.search}
              value=''
              onChange={() => {}}
            />
          </Col>
        </Row>
        {posts.length > 0 && (
          <div className={styles.posts}>
            {posts.map((post: any) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>)}
       
      </div>
    ) 
})

export default Posts;