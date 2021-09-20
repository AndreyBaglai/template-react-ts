import React, { useEffect } from 'react'
import { PageHeader, Row, Col, Rate, Comment, Tooltip, List, Avatar } from 'antd'
import { observer } from 'mobx-react-lite'
import dayjs from 'dayjs'
import { Link, useParams } from 'react-router-dom'

import { useStore } from 'stores'
import history from 'utils/history'

import styles from './styles.module.scss'

interface IParams {
  id: string
}

const Post = observer(() => {
  const params: IParams = useParams()
  const { postsStore, commentsStore } = useStore()

  const { post, posts } = postsStore
  const { comments } = commentsStore

  useEffect(() => {
    postsStore.getPost(params.id)
    commentsStore.getCommentsById(params.id)
    postsStore.getPosts()
  }, [])

  const commentsList = comments.map((comment: any) => ({
    actions: [<span>Reply to</span>],
    author: comment.email,
    avatar: process.env.REACT_APP_AVATAR,
    content: <p>{comment.body}</p>,
    datetime: () => {
      let time = dayjs().format('DD/MM/YYYY HH:MM:SS')

      return (
        <Tooltip title="Time: ">
          <span>{time}</span>
        </Tooltip>
      )
    },
  }))

  return (
    <div>
      <PageHeader onBack={() => history.push('/')} title={post.title} />
      <Row className={styles.content}>
        <Col md={10} sm={20}>
          <p>{post.body}</p>
          <Rate value={4} />

          <List
            header={`${commentsList.length} comments`}
            itemLayout="horizontal"
            dataSource={commentsList}
            renderItem={(item: any) => (
              <Comment
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime()}
              />
            )}
          />
        </Col>

        <Col md={10} sm={20} xs={24} className={styles.posts}>
          <List
            itemLayout="horizontal"
            dataSource={posts}
            renderItem={(post: any) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`${process.env.REACT_APP_PICTURE_API}?random=${post.id}`} />}
                  title={<Link to={`${post.id}`}>{post.title}</Link>}
                  description={post.body}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  )
})

export default Post
