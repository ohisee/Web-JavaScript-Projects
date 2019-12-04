const { gql, ApolloServer } = require('apollo-server');

// Scalar types - String, Boolean, Int, Float, ID

// Type definitions (schema)
const typeDefs = gql`
  type Query {
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
    hello: String!
    location: String!
    bio: String!

    greeting(name: String, position: String): String!
    add(a: Float!, b: Float!): Float!
    addNumbers(numbers: [Float!]!): Float!
    grades: [Int!]!
    me: User!
    post: Post!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
  }
`;

// Resolvers, a map of functions which return data for the schema 
const resolvers = {
  Query: {
    id: function () {
      return 'IdOne';
    },
    name() {
      return 'Person Person';
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
      return "Single House";
    },
    price() {
      return 100.09;
    },
    releaseYear() {
      return 2018;
    },
    rating() {
      return 10.0;
    },
    inStock() {
      return true;
    },
    hello() {
      return 'This is my first query!';
    },
    location() {
      return 'San Mateo';
    },
    bio: function () {
      return 'UI developer';
    },
    greeting(parent, args, ctx, info) {
      if (args.name && args.position) {
        return `Hello, ${args.name}! You are my ${args.position}`
      } else {
        return 'Hello!';
      }
    },
    add(parent, args, ctx, info) {
      // if (!isNaN(args.a) && !isNaN(args.b)) {
      return args.a + args.b;
      // } else {
      //   return 0;
      // }
    },
    addNumbers(parent, args, context, info) {
      if (args.numbers.length === 0) {
        return 0;
      }
      return args.numbers.reduce((acc, cur) => acc + cur, 0);
    },
    grades(parent, args, context, info) {
      return [99, 80, 93];
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
  }
};

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});

server.listen().then(({ url }) => {
  console.log(`Starting server at port ${url}`);
});
