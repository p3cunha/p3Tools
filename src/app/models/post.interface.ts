export interface Post {
  __typename: 'Post';
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  author: any;
  blogPostsId?: string | null;
}
