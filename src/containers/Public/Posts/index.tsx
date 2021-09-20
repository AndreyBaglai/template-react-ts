import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Input, Row, Col, Pagination, Typography } from 'antd'
import classNames from 'classnames'

import { MAX_POSTS_ON_PAGE } from 'config'
import { useStore } from 'stores'
import PostCard from './PostCard'

import styles from './styles.module.scss'

const Posts = observer(() => {
  const { postsStore } = useStore()
  const { posts, postsOnPage } = postsStore

  const [filterPosts, setFilterPosts] = useState(postsOnPage)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    postsStore.getPosts()
    postsStore.getPostsByPage(currentPage, MAX_POSTS_ON_PAGE)
  }, [])

  useEffect(() => {
    setFilterPosts(postsOnPage)
  }, [postsOnPage])

  const onChangeFilterPosts = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const currValue = target.value.toLocaleLowerCase()
    if (currValue === '') {
      setFilterPosts(postsOnPage)
    }

    const filteredPosts = postsOnPage.filter((post: any) => {
      const title = post.title.toLowerCase()
      const body = post.body.toLowerCase()

      return title.indexOf(currValue) > -1 || body.indexOf(currValue) > -1
    })

    setFilterPosts(filteredPosts)
  }

  const onChangePage = (page: number) => {
    setCurrentPage(page)
    postsStore.getPostsByPage(page, MAX_POSTS_ON_PAGE)
  }

  return (
    <div className="container">
      <Row justify="center">
        <Col span={5} xs={20} sm={11} md={6} className={styles.wrapSearch}>
          <Input.Search
            placeholder="Search by post name and description"
            size="large"
            onSearch={() => {}}
            className={styles.search}
            onChange={onChangeFilterPosts}
          />
        </Col>
      </Row>

      {filterPosts.length > 0 ? (
        <Row gutter={[16, 16]} justify="center" align="top" className={classNames(styles.posts)}>
          {filterPosts.map((post: any) => (
            <Col span={5} xs={20} sm={11} md={6} key={post.id}>
              <PostCard key={post.id} {...post} />
            </Col>
          ))}
        </Row>
      ) : <Typography.Text type="secondary" className={styles.info}>No searching posts...</Typography.Text>}

      <Pagination
        className={styles.pagination}
        current={currentPage}
        defaultCurrent={currentPage}
        pageSize={MAX_POSTS_ON_PAGE}
        total={posts.length}
        showSizeChanger={false}
        onChange={onChangePage}
      />
    </div>
  )
})

export default Posts
