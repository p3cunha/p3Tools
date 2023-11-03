import { Blog } from "./blog.interface";

export interface Post {
  __typename: "Post";
  id: string;
  title: string;
  blog?: Blog | null;
  comments?: ModelCommentConnection | null;
  content: string;
  author: User;
  likes?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
}

export type User = {
  userDataKey: string;
  username: string;
  attributes: Attributes;
};

export type Attributes = {
  email?: string | null;
  email_verified?: boolean | null;
  identities?: string | null;
  sub?: string | null;
};

export type Client = {
  __typename: "Client";
  endpoint?: string | null;
  fetchOptions?: string | null;
};

export type ModelCommentConnection = {
  items: Array<Comment | null>;
  nextToken?: string | null;
};

export type Comment = {
  __typename: "Comment";
  id: string;
  post?: Post | null;
  content: string;
  author: User;
  createdAt: string;
  updatedAt: string;
  postCommentsId?: string | null;
};
