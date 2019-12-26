/**
 * @fileoverview Resolver's query
 */
const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users
    }
    return db.users.filter(user =>
      user.name.includes(args.query));
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter(post =>
      post.title.includes(args.query) || post.body.includes(args.query));
  },
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments;
    }
    return db.comments.filter(comment => comment.text.includes(args.query));
  },
  me() {
    return {
      id: "123001",
      name: "Mike",
      email: "mike@example",
      age: 28,
    };
  },
};

export default Query;
