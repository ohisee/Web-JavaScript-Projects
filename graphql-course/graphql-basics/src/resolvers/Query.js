const Query = {
  // 3rd parameter is context that contains db
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter(post => {
      return post.title.toLowerCase().includes(args.query.toLowerCase())
        || post.body.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
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
};

export { Query as default };