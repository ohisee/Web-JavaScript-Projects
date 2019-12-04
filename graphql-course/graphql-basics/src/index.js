// const { gql, ApolloServer } = require('apollo-server');
import { ApolloServer, PubSub } from 'apollo-server';
// import uuidv4 from 'uuid/v4';
import { UserPostCommentSchema } from './schema';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';
import User from './resolvers/User';
import Post from './resolvers/Post';
import Comment from './resolvers/Comment';

const pubSub = new PubSub();

// Type definitions (schema) moved to schema.graphql
// Resolvers, a map of functions which return data for the schema 
const server = new ApolloServer({
  typeDefs: UserPostCommentSchema,
  resolvers: {
    Query, Mutation, Subscription, User, Post, Comment
  },
  context: {
    db,
    pubSub
  }
});

server.listen().then(({ url }) => {
  console.log(`Starting server at port ${url}`);
});
