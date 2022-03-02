export interface Post {
  __typename: 'Post'
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  blogPostsId?: string | null
}
