import { ModelPostConnection } from "../API.service";

export interface Blog {
  __typename: "Blog";
  id: string;
  name: string;
  posts?: ModelPostConnection | null;
  createdAt: string;
  updatedAt: string;
}
