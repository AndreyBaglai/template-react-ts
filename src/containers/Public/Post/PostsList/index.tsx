import React from 'react'
import { Avatar, Col, List } from 'antd'
import { Link } from 'react-router-dom'

import { IPost } from 'types/Post'

import styles from './styles.module.scss'

interface IProps {
  posts: IPost[]
}

const PostsList: React.FC<IProps> = ({ posts }) => {
  console.log('Render: PostsList component');
  return (
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
  )
}

export default React.memo(PostsList)
