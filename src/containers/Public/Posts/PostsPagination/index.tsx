import React from 'react'
import { Pagination } from 'antd'

import { MAX_POSTS_ON_PAGE } from 'utils/const'

import styles from './styles.module.scss'

interface IProps {
  page: number
  onChangePage: (val: number) => void
  total: number
}

const PostsPagination: React.FC<IProps> = ({ page, onChangePage, total }) => {
  return (
    <Pagination
      className={styles.pagination}
      current={page}
      pageSize={MAX_POSTS_ON_PAGE}
      total={total}
      showSizeChanger={false}
      onChange={onChangePage}
      simple={true}
    />
  )
}

export default PostsPagination
