/**
 * @fileoverview GraphQL schema
 */
import { gql } from "apollo-server";

//Type definition (application schema)
//Scalar Type - String, Boolean, Int, Float, ID
const typeDefs = gql`
  type Query {
    users(query: String, first: Int, skip: Int, after: String): [User!]!
    posts(query: String, first: Int, skip: Int, after: String): [Post!]!
    comments(query: String, first: Int, skip: Int, after: String): [Comment!]!
    me: User!
    post(id: ID!): Post!
    myPosts(query: String, first: Int, skip: Int, after: String): [Post!]!
  }

  type Mutation {
    createUser(data: CreateUserInput!): AuthPayload!
    deleteUser: User!
    updateUser(data: UpdateUserInput!): User!
    createPost(data: CreatePostInput!): Post!
    deletePost(id: ID!): Post!
    updatePost(id: ID!, data: UpdatePostInput!): Post!
    createComment(data: CreateCommentInput!): Comment!
    deleteComment(id: ID!): Comment!
    updateComment(id: ID!, data: UpdateCommentInput!): Comment!
    login(data: LoginUserInput!): AuthPayload!
  }

  type Subscription {
    count: Int!
    comment(postId: ID!): CommentSubscriptionPayload!
    post: PostSubscriptionPayload!
    myPost: PostSubscriptionPayload!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  "Input type must only contain scalar type"
  input CreateUserInput {
    name: String!
    email: String!
    password: String!
  }

  input UpdateUserInput {
    name: String
    email: String
    password: String
  }

  "Input type to create post"
  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
  }

  input UpdatePostInput {
    title: String
    body: String
    published: Boolean
  }

  "Input type to create comment"
  input CreateCommentInput {
    text: String!
    post: ID!
  }

  input UpdateCommentInput {
    text: String
  }

  "Input type to authenicate a user"
  input LoginUserInput {
    email: String!
    password: String!
  }

  type User {
    id: ID!
    name: String!
    email: String
    password: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }

  enum MutationType {
    CREATED
    UPDATED
    DELETED
  }

  type PostSubscriptionPayload {
    mutation: MutationType!
    node: Post
  }

  type CommentSubscriptionPayload {
    mutation: MutationType!
    node: Comment
  }

`;

export { typeDefs };
