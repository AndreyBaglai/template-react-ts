export interface ICommentList {
  actions: JSX.Element[]
  author: string
  avatar: string | undefined
  content: JSX.Element
  datetime: () => JSX.Element
}
