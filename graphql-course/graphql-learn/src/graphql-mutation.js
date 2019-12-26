/**
 * @fileoverview GraphQL mutation index
 */
import { ApolloServer, gql } from "apollo-server";
import uuidV4 from "uuid/v4";

// Demo user data
const users = [
  {
    id: "123001",
    name: "Mike",
    email: "mike@example",
    age: 28,
  }, {
    id: "123002",
    name: "Talker",
    email: "talker@example",
    age: 29,
  }, {
    id: "123003",
    name: "Walker",
    email: "walker@example",
    age: 30,
  },
];

// Demo post data
const posts = [
  {
    id: "123221",
    title: "keep running",
    body: "Start a new chat",
    published: true,
    author: "123001",
  },
  {
    id: "123222",
    title: "keep walking",
    body: "Start a new chat in two days",
    published: true,
    author: "123001",
  },
  {
    id: "123223",
    title: "Look at a new direction",
    body: "Look at a new direction to find something",
    published: true,
    author: "123002",
  }
];

// Demo comment data
const comments = [
  {
    id: "20001",
    text: "commenting on this post to get feedback",
    author: "123001",
    post: "123221",
  },
  {
    id: "20002",
    text: "feedback is given to this post",
    author: "123001",
    post: "123222",
  },
  {
    id: "20003",
    text: "more feedbacks, glad you enjoyed it",
    author: "123002",
    post: "123223"
  },
  {
    id: "20004",
    text: "Random comments for no feedback",
    author: "123003",
    post: "123223",
  }
];

//Type definition (application schema)
const typeDefs = gql`
  type Query {
    "A simple type for hello, always get a string back"
    location: String!
    hello: String!
    bio: String!
    id: ID!
    name: String!
    age: Int!
    employed: Boolean!
    gpa: Float
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!

    greeting(name: String, position: String): String!
    add(a: Float!, b: Float!): Float!
    adds(numbers: [Float!]!): Float!
    grades: [Int!]!

    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments(query: String): [Comment!]!
    me: User!
    post: Post!
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int): User!
    createPost(title: String!, body: String!, published: Boolean!, authoer: ID!): Post!
    createComment(text: String!, author: ID!, post: ID!): Comment!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int!
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

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return "This is first query"
    },
    location() {
      return "Outer Mission"
    },
    bio() {
      return "learning new thing"
    },
    id() {
      return "abc123";
    },
    name() {
      return "Person Walker"
    },
    age() {
      return 100;
    },
    employed() {
      return true;
    },
    gpa() {
      return null;
    },
    title() {
      return "Phone"
    },
    price() {
      return 120.98;
    },
    releaseYear() {
      return 2020;
    },
    rating() {
      return 4.8;
    },
    inStock() {
      return true;
    },
    me() {
      return {
        id: "123098",
        name: "Mike",
        email: "mike@example",
        age: 28,
      }
    },
    post() {
      return {
        id: "123011",
        title: "keep running",
        body: "Start a new chat",
        published: true
      }
    },
    greeting(parent, args, context, info) {
      if (args.name && args.position) {
        return `Hello ${args.name}!. You are ${args.position}`;
      }
      return "Hello";
    },
    add(parent, args, context, info) {
      if (args.a !== undefined && args.b !== undefined) {
        return args.a + args.b;
      }
      return -1;
    },
    grades(parent, args, context, info) {
      return [100, 99, 80];
    },
    adds(parent, args, context, info) {
      if (args.numbers.length === 0) {
        return 0;
      }
      return args.numbers.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    },
    users(parent, args, context, info) {
      if (!args.query) {
        return users
      }
      return users.filter(user =>
        user.name.includes(args.query));
    },
    posts(parent, args, context, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter(post =>
        post.title.includes(args.query) || post.body.includes(args.query));
    },
    comments(parent, args, context, info) {
      if (!args.query) {
        return comments;
      }
      return comments.filter(comment => comment.text.includes(args.query));
    }
  },
  Mutation: {
    createUser(parent, args, context, info) {
      const emailTaken = users.some(user => user.email === args.email);

      if (emailTaken) {
        throw new Error('Email is taken');
      }

      // const user = {
      //   id: uuidV4(),
      //   name: args.name,
      //   email: args.email,
      //   age: args.age,
      // };

      const user = { id: uuidV4(), ...args, };

      users.push(user);

      return user;
    },

    createPost(parent, args, context, info) {
      const userExists = users.some(user => user.id === args.author);

      if (!userExists) {
        throw new Error('User not found');
      }

      // const post = {
      //   id: uuidV4(),
      //   title: args.title,
      //   body: args.body,
      //   published: args.published,
      //   author: args.author,
      // };

      const post = { id: uuidV4(), ...args };

      posts.push(post);

      return post;
    },

    createComment(parent, args, context, info) {
      const userExists = users.some(user => user.id === args.author);

      if (!userExists) {
        throw new Error('User not found');
      }

      const postExistsAndPublished = posts.some(
        post => post.id === args.post && post.published);

      if (!postExistsAndPublished) {
        throw new Error("Incorrect post");
      }

      // const comment = {
      //   id: uuidV4(),
      //   text: args.text,
      //   author: args.author,
      //   post: args.post,
      // };

      const comment = { id: uuidV4(), ...args };

      comments.push(comment);

      return comment;
    },
  },
  // For each post, this Post resolver is called
  Post: {
    author(parent, args, context, info) {
      return users.find(user => user.id === parent.author);
    },

    comments(parent, args, context, info) {
      return comments.filter(comment => comment.post === parent.id);
    }
  },
  // For each user, this User resolver is called
  User: {
    posts(parent, args, context, info) {
      return posts.filter(post => post.author === parent.id);
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
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`);
});
