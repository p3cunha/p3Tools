export interface Post {
  __typename: 'Post';
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  author: any;
  likes?: Array<string | null> | null;
  blogPostsId?: string | null;
}
