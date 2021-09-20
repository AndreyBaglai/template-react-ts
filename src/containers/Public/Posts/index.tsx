import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { notification, Empty, Button, Input, Row, Col, message, Pagination } from 'antd'
import classNames from 'classnames'

import { useStore } from 'stores'
import PostCard from './PostCard'

import styles from './styles.module.scss'

const MAX_POSTS_ON_PAGE = 8

const Posts = observer(() => {
  const postsStore = useStore().postsStore
  const { posts, postsOnPage } = postsStore

  const [searchText, setSearchText] = useState('')
  const [filterPosts, setFilterPosts] = useState(postsOnPage)
  const [currentPage, setCurrentPage] = useState(1)

  // const loadImage = async () => {
  //   const imagesUrl = await axios.get("https://picsum.photos/v2/list").then(res => res.data.map((item: any) => item.url))
  //   postsStore.addImageLinkForPosts(imagesUrl)
  // }

  useEffect(() => {
    postsStore.getPosts()
    postsStore.getPostsByPage(currentPage, MAX_POSTS_ON_PAGE)
  }, [])

  useEffect(() => {
    setFilterPosts(postsOnPage)
  }, [postsOnPage])

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
      setFilterPosts(postsOnPage)
    }

    setSearchText(target.value)

    setFilterPosts(
      postsOnPage.filter((post: any) => {
        const title = post.title.toLowerCase()
        const body = post.body.toLowerCase()

        return title.indexOf(searchText.toLowerCase()) > -1 || body.indexOf(searchText.toLowerCase()) > -1
      })
    )
  }

  const onChangePage = (page: number) => {
    setCurrentPage(page)
    postsStore.getPostsByPage(page, MAX_POSTS_ON_PAGE)
  }

  return (
    <div className="row">
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

      <div>
        {filterPosts.length > 0 && (
          <div className={classNames('row', styles.posts)}>
            {filterPosts.map((post: any) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </div>

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
