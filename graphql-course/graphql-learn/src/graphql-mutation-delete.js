/**
 * @fileoverview GraphQL index
 */
import { ApolloServer, gql } from "apollo-server";
import uuidV4 from "uuid/v4";

// Demo user data
let users = [
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
let posts = [
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
let comments = [
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
//Scalar Type - String, Boolean, Int, Float, ID
const typeDefs = gql`
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments(query: String): [Comment!]!
  }

  type Mutation {
    createUser(data: CreateUserInput!): User!
    deleteUser(id: ID!): User!
    createPost(data: CreatePostInput!): Post!
    deletePost(id: ID!): Post!
    createComment(data: CreateCommentInput!): Comment!
    deleteComment(id: ID!): Comment!
  }

  "Input type must only contain scalar type"
  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  "Input type to create post"
  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
  }

  "Input type to create comment"
  input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
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
      const emailTaken = users.some(user => user.email === args.data.email);

      if (emailTaken) {
        throw new Error('Email is taken');
      }

      const user = { id: uuidV4(), ...args.data, };

      users.push(user);

      return user;
    },

    deleteUser(parent, args, context, info) {
      const userIndex = users.findIndex(user => user.id === args.id);
      if (userIndex === -1) {
        throw new Error('User not found');
      }

      const deletedUsers = users.splice(userIndex, 1);

      posts = posts.filter(post => {
        const match = post.author === args.id;
        if (match) {
          comments = comments.filter(comment => comment.post !== post.id);
        }
        return !match;
      });

      comments = comments.filter(comment => comment.author !== args.id);

      return deletedUsers[0];
    },

    createPost(parent, args, context, info) {
      const userExists = users.some(user => user.id === args.data.author);

      if (!userExists) {
        throw new Error('User not found');
      }

      const post = { id: uuidV4(), ...args.data };

      posts.push(post);

      return post;
    },

    deletePost(parent, args, context, info) {
      const postIndex = posts.findIndex(post => post.id === args.id);
      if (postIndex === -1) {
        throw new Error('Post not found');
      }

      comments = comments.filter(comment => comment.post !== args.id);
      const deletedPosts = posts.splice(postIndex, 1);
      return deletedPosts[0];
    },

    createComment(parent, args, context, info) {
      const userExists = users.some(user => user.id === args.data.author);

      if (!userExists) {
        throw new Error('User not found');
      }

      const postExistsAndPublished = posts.some(
        post => post.id === args.data.post && post.published);

      if (!postExistsAndPublished) {
        throw new Error("Incorrect post");
      }

      const comment = { id: uuidV4(), ...args.data };

      comments.push(comment);

      return comment;
    },

    deleteComment(parent, args, context, info) {
      const commentIndex = comments.findIndex(comment => comment.id === args.id);
      if (commentIndex === -1) {
        throw new Error('Comment not found');
      }

      const deletedComments = comments.splice(commentIndex, 1);
      return deletedComments[0];
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
