import React, { useEffect, useMemo } from 'react'
import { PageHeader, Row, Tooltip } from 'antd'
import { observer } from 'mobx-react-lite'
import dayjs from 'dayjs'
import { useParams } from 'react-router-dom'

import { useStore } from 'stores'
import history from 'utils/history'
import { IComment } from 'types/Comment'
import { IParams } from 'types/Params'
import { ICommentList } from 'types/CommentList'
import CommentsList from './CommentsList'
import PostsList from './PostsList'

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

  const commentsList: ICommentList[] = useMemo(() => comments.map(({ email, body }: IComment) => ({
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
  })), [comments])

  return (
    <div>
      {post && (
        <>
          <PageHeader onBack={() => history.push('/')} title={post.title} />

          <Row className={styles.content}>
            <CommentsList post={post} comments={commentsList} />
            <PostsList posts={posts} />
          </Row>
        </>
      )}
    </div>
  )
})

export default Post
