import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

import { IPost } from 'types/Post'

import styles from './styles.module.scss'

interface IProps {
  post: IPost
}

const PostCard: React.FC<IProps> = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <Card
        className={styles.card}
        key={post.id}
        hoverable
        cover={<img className={styles.img} alt="example" src={`${process.env.REACT_APP_PICTURE_API}?random=${post.id}`} />}
      >
        <Card.Meta title={post.title} description={post.body} className={styles.text} />
      </Card>
    </Link>
  )
}

export default React.memo(PostCard)
