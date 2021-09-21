import React, { useEffect } from 'react'
import { PageHeader, Row, Col, Rate, Comment, Tooltip, List, Avatar } from 'antd'
import { observer } from 'mobx-react-lite'
import dayjs from 'dayjs'
import { Link, useParams } from 'react-router-dom'

import { useStore } from 'stores'
import history from 'utils/history'
import { IComment } from 'types/Comment'
import { IPost } from 'types/Post'
import { IParams } from 'types/Params'
import { ICommentList } from 'types/CommentList'

import styles from './styles.module.scss'

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

  const commentsList: ICommentList[] = comments.map(({ email, body }: IComment) => ({
    actions: [<span>Reply to</span>],
    author: email,
    avatar: process.env.REACT_APP_AVATAR,
    content: <p>{body}</p>,
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
      {post && (
        <>
          <PageHeader onBack={() => history.push('/')} title={post.title} />
          <Row className={styles.content}>
            <Col md={10} sm={20}>
              <p>{post.body}</p>
              <Rate value={4} />

              <List
                header={`${commentsList.length} comments`}
                itemLayout="horizontal"
                dataSource={commentsList}
                renderItem={({ actions, author, avatar, content, datetime }: ICommentList) => (
                  <Comment actions={actions} author={author} avatar={avatar} content={content} datetime={datetime()} />
                )}
              />
            </Col>

            <Col md={10} sm={20} xs={24} className={styles.posts}>
              <List
                itemLayout="horizontal"
                dataSource={posts}
                renderItem={({ id, title, body }: IPost) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar src={`${process.env.REACT_APP_PICTURE_API}?random=${id}`} />}
                      title={<Link to={`${id}`}>{title}</Link>}
                      description={body}
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  )
})

export default Post
