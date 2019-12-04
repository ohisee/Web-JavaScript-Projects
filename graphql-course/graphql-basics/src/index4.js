// const { gql, ApolloServer } = require('apollo-server');
import { gql, ApolloServer } from 'apollo-server';
import uuidv4 from 'uuid/v4';

// Scalar types - String, Boolean, Int, Float, ID

// Demo user data
const users = [{
  id: '1',
  name: 'A Person',
  email: 'aperson@example.com',
  age: 100
}, {
  id: '2',
  name: 'Another Person',
  email: 'anotherperson@example.com',
}, {
  id: '3',
  name: 'Mike Person',
  email: 'mike@example.com',
}];

const posts = [{
  id: '10',
  title: 'hello world',
  body: 'this is post 1',
  published: true,
  author: '1',
}, {
  id: '11',
  title: 'hello world',
  body: 'this is post 2',
  published: true,
  author: '1',
}, {
  id: '12',
  title: 'hello world',
  body: 'this is post 3',
  published: true,
  author: '2',
}];

const comments = [{
  id: '101',
  text: 'comment number 1',
  author: '1',
  post: '10'
}, {
  id: '102',
  text: 'comment number 2',
  author: '2',
  post: '11'
}, {
  id: '103',
  text: 'comment number 3',
  author: '3',
  post: '11'
}, {
  id: '104',
  text: 'comment number 4',
  author: '1',
  post: '10'
}, {
  id: '105',
  text: 'comment number 5',
  author: '2',
  post: '11'
}];

// Type definitions (schema)
const typeDefs = gql`
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments(query: String): [Comment!]!
    me: User!
    post: Post!
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int): User!
    createPost(title: String!, body: String!, published: Boolean!, author: ID!): Post!
    createComment(text: String!, author: ID!, post: ID!): Comment!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
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
`;

// Resolvers, a map of functions which return data for the schema 
const resolvers = {
  Query: {
    users(parent, args, context, info) {
      if (!args.query) {
        return users;
      }
      return users.filter(user => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, context, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter(post => {
        return post.title.toLowerCase().includes(args.query.toLowerCase())
          || post.body.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    comments(parent, args, context, info) {
      return comments;
    },
    me() {
      return {
        id: '123098',
        name: 'Mike',
        email: 'mike@example.com',
        age: 100
      };
    },
    post() {
      return {
        id: '18720099',
        title: 'Hello World',
        body: 'GraphQL coding',
        published: true
      }
    },
  },
  Mutation: {
    createUser(parent, args, context, info) {
      const emailTaken = users.some(user => user.email === args.email);
      if (emailTaken) {
        throw new Error('Email taken');
      }
      const user = {
        id: uuidv4(),
        ...args
      };
      users.push(user);
      return user;
    },
    createPost(parent, args, context, info) {
      const userExisted = users.some(user => user.id === args.author);
      if (!userExisted) {
        throw new Error('User not found');
      }
      const post = {
        id: uuidv4(),
        title: args.title,
        body: args.body,
        published: args.published,
        author: args.author,
      };
      posts.push(post);
      return post;
    },
    createComment(parent, args, context, info) {
      const userExisted = users.some(user => user.id === args.author);
      if (!userExisted) {
        throw new Error('User not found');
      }
      const postExisted = posts.some(post => post.id === args.post && post.published);
      if (!postExisted) {
        throw new Error('Invalid post');
      }
      const comment = {
        id: uuidv4(),
        ...args
      };
      comments.push(comment);
      return comment;
    }
  },
  Post: {
    author(parent, args, context, info) {
      return users.find(user => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, context, info) {
      return comments.filter(comment => comment.post === parent.id);
    }
  },
  User: {
    posts(parent, args, context, info) {
      return posts.filter(post => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, context, info) {
      return comments.filter(comment => comment.author === parent.id);
    }
  },
  Comment: {
    author(parent, args, context, info) {
      return users.find(user => user.id === parent.author);
    },
    post(parent, args, context, info) {
      return posts.find(post => post.id === parent.post);
    }
  }
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.listen().then(({ url }) => {
  console.log(`Starting server at port ${url}`);
});
