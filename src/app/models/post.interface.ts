export interface Post {
  __typename: 'Post'
  id: string
  title: string
  createdAt: string
  updatedAt: string
  blogPostsId?: string | null
}
