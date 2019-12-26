/**
 * @fileoverview GraphQL index
 */
import { ApolloServer, PubSub } from "apollo-server";
import { typeDefs } from "./schemaGraphQL";
import db from "./db";
import Query from "./resolvers/Query";
import Mutation from "./resolvers/Mutation";
import Subscription from "./resolvers/Subscription";
import User from "./resolvers/User";
import Post from "./resolvers/Post";
import Comment from "./resolvers/Comment";

const pubSub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query, Mutation, Subscription, User, Post, Comment,
  },
  context: { db, pubSub },
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
