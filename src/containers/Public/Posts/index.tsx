import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Input, Row, Col, Typography } from 'antd'

import PaginationPosts from './Pagination'
import { useStore } from 'stores'
import PostCard from './PostCard'
import { IPost } from 'types/Post'
import { MAX_POSTS_ON_PAGE } from 'utils/const'

import styles from './styles.module.scss'

const Posts = observer(() => {
  const { postsStore } = useStore()
  const { posts, postsOnPage } = postsStore

  const [filterPosts, setFilterPosts] = useState<IPost[]>(postsOnPage)
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

    const filteredPosts: IPost[] = postsOnPage.filter(
      ({ title, body }: IPost) => title.toLowerCase().includes(currValue) || body.toLowerCase().includes(currValue)
    )

    setFilterPosts(filteredPosts)
  }

  const onChangePage = (page: number) => {
    setCurrentPage(page)
    postsStore.getPostsByPage(page, MAX_POSTS_ON_PAGE)
    window.scrollTo(0, 0)
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
        <Row gutter={[16, 16]} justify="center" align="top" className={styles.posts}>
          {filterPosts.map((post: IPost) => (
            <Col span={5} xs={20} sm={11} md={6} key={post.id}>
              <PostCard key={post.id} {...post} />
            </Col>
          ))}
        </Row>
      ) : (
        <Typography.Text type="secondary" className={styles.info}>
          No searching posts...
        </Typography.Text>
      )}

      <PaginationPosts onChangePage={onChangePage} page={currentPage} maxPosts={posts.length} />
    </div>
  )
})

export default Posts
