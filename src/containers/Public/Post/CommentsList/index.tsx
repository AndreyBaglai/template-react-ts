import React from 'react'
import { Col, List, Rate, Comment } from 'antd'

import { ICommentList } from 'types/CommentList'
import { IPost } from 'types/Post'

interface IProps {
  post: IPost;
  comments: ICommentList[];
}

const CommentsList: React.FC<IProps> = ({ post, comments }) => {
  return (
    <Col md={10} sm={20}>
    <p>{post.body}</p>
    <Rate value={4} />

    <List
      header={`${comments.length} comments`}
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={({ actions, author, avatar, content, datetime }: ICommentList) => (
        <Comment actions={actions} author={author} avatar={avatar} content={content} datetime={datetime()} />
      )}
    />
  </Col>
  )
}

export default React.memo(CommentsList)
