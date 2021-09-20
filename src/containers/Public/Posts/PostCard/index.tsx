import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import styles from './styles.module.scss'

const PostCard = (post: any) => {
  return (
    <Link to={`/post/${post.id}`}>
      <Card
        className={classNames(styles.card)}
        key={post.id}
        hoverable
        cover={
          <img className={styles.img} alt="example" src={`${process.env.REACT_APP_PICTURE_API}?random=${post.id}`} />
        }
      >
        <Card.Meta title={post.title} description={post.body} className={styles.text} />
      </Card>
    </Link>
  )
}

export default PostCard
