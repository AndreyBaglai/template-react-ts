import React from 'react'
import { Card } from 'antd'
import { Link } from 'react-router-dom'

import { IPost } from 'types/Post'

import styles from './styles.module.scss'

const PostCard = ({ id, title, body }: IPost) => {
  return (
    <Link to={`/post/${id}`}>
      <Card
        className={styles.card}
        key={id}
        hoverable
        cover={
          <img className={styles.img} alt="example" src={`${process.env.REACT_APP_PICTURE_API}?random=${id}`} />
        }
      >
        <Card.Meta title={title} description={body} className={styles.text} />
      </Card>
    </Link>
  )
}

export default PostCard
