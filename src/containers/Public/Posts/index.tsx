import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { notification, Empty, Button, Input, Row, Col, message } from 'antd'

import { useStore } from 'stores'
import PostCard from './PostCard'

import styles from './styles.module.scss'

const Posts = observer(() => {
  const postsStore = useStore().postsStore
  const { posts } = postsStore

  const [searchText, setSearchText] = useState('')
  const [filterPosts, setFilterPosts] = useState(posts)

  useEffect(() => {
    postsStore.getPosts()
  }, [])

  useEffect(() => {
    setFilterPosts(posts)
  }, [posts])

  // useEffect(() => {
  //   setFilterPosts(posts)
  //   console.log(filterPosts)
  // }, [filterPosts])
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
  //   this.setState({ searchText: '' }, () => {
  //     this.loadPosts()
  //   })
  // }

  const onChangeFilterPosts = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (searchText === '') {
      setFilterPosts(posts)
      setSearchText('')
    }

    setSearchText(target.value)

    setFilterPosts(posts.filter((post: any) => {
      const title = post.title.toLowerCase()
      const body = post.body.toLowerCase()

      return title.indexOf(searchText.toLowerCase()) > -1 || body.indexOf(searchText.toLowerCase()) > -1
    }))
  }

  return (
    <div>
      <Row>
        <Col span={8} offset={8}>
          <Input.Search
            placeholder="Search by post name and description"
            size="large"
            onSearch={() => {}}
            className={styles.search}
            onChange={onChangeFilterPosts}
          />
        </Col>
      </Row>
      {filterPosts.length > 0 && (
        <div className={styles.posts}>
          {filterPosts.map((post: any) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      )}
    </div>
  )
})

export default Posts
