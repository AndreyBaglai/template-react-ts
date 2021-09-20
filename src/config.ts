import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_HOST,
  validateStatus: status => true,
})

export const MAX_POSTS_ON_PAGE = 8
export const MAX_POSTS_LOAD = 16
// here you can define constant's for project or inintial configuration for packages
