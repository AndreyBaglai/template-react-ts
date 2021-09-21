import React from 'react'
import { Pagination } from 'antd'

import { MAX_POSTS_ON_PAGE } from 'utils/const'

import styles from './styles.module.scss'

interface IProps {
  page: number
  onChangePage: (val: number) => void
  maxPosts: number
}

const PaginationPosts = ({ page, onChangePage, maxPosts }: IProps) => {
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

export default PaginationPosts
