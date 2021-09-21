import React from 'react'
import { Pagination } from 'antd'

import { MAX_POSTS_ON_PAGE } from 'utils/const'

import styles from './styles.module.scss'

interface IProps {
  page: number
  onChangePage: (val: number) => void
  maxPosts: number
}

const PostsPagination: React.FC<IProps> = ({ page, onChangePage, maxPosts }) => {
  return (
    <Pagination
      className={styles.pagination}
      current={page}
      defaultCurrent={page}
      pageSize={MAX_POSTS_ON_PAGE}
      total={maxPosts}
      showSizeChanger={false}
      onChange={onChangePage}
    />
  )
}

export default PostsPagination
