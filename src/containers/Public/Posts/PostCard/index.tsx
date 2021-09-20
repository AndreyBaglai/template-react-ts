import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import classNames from 'classnames'

const PostCard = (post: any) => {
  return (
    <Link to={`/post/${post.id}`}>
      <Card className={classNames(styles.card)} key={post.id} hoverable cover={<img alt="example" src={`https://picsum.photos/300/200/?random=${post.id}`} />}>
        <Card.Meta title={post.title} description={post.body} className={styles.text} />
      </Card>
    </Link>
  )
}

export default PostCard;