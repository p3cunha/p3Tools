import { Blog } from "./blog.interface";

export interface Post {
  __typename: 'Post';
  id: string;
  title: string;
  blog?: Blog | null;
  comments?: ModelCommentConnection | null;
  content: string;
  author: User;
  likes: Array<string>;
  createdAt: string;
  updatedAt: string;
  blogPostsId?: string | null;
}

export type User = {
  // __typename: "User";
  // id: string;
  // Session?: string | null;
  // authenticationFlowType?: string | null;
  // client?: string | null;
  // keyPrefix?: string | null;
  // pool?: string | null;
  // deviceKey?: string | null;
  // preferredMFA?: string | null;
  // signInUserSession?: string | null;
  // storage?: string | null;
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
  __typename: "ModelCommentConnection";
  items: Array<Comment | null>;
  nextToken?: string | null;
};
