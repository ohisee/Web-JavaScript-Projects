import uuidv4 from 'uuid/v4';

const Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.users.some(user => user.email === args.data.email);
    if (emailTaken) {
      throw new Error('Email taken');
    }
    const user = {
      id: uuidv4(),
      ...args.data
    };
    db.users.push(user);
    return user;
  },
  deleteUser(parent, args, { db }, info) {
    const userIndex = db.users.findIndex(user => user.id === args.id);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    const deletedUsers = db.users.splice(userIndex, 1);
    db.posts = posts.filter(post => {
      const match = post.author === args.id;
      if (match) {
        db.comments = db.comments.filter(comment => comment.post !== post.id);
      }
      return !match;
    });
    db.comments = db.comments.filter(comment => comment.author !== args.id);
    return deletedUsers[0];
  },
  updateUser(parent, args, { db }, info) {
    const { id, data } = args;
    const user = db.users.find(user => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    if (typeof data.email === 'string') {
      const emailTaken = db.users.some(user => user.email === data.email);
      if (emailTaken) {
        throw new Error('Email taken');
      }
      user.email = data.email;
    }

    if (typeof data.name === 'string') {
      user.name = data.name;
    }

    if (typeof data.age !== 'undefined') {
      user.age = data.age;
    }

    return user;
  },
  createPost(parent, args, { db, pubSub }, info) {
    const userExisted = db.users.some(user => user.id === args.data.author);
    if (!userExisted) {
      throw new Error('User not found');
    }
    const post = {
      id: uuidv4(),
      ...args.data
    };
    db.posts.push(post);
    if (args.data.published) {
      pubSub.publish('post', {
        post: {
          mutation: 'CREATED',
          data: post
        }
      });
    }
    return post;
  },
  deletePost(parent, args, { db, pubSub }, info) {
    const postIndex = db.posts.findIndex(post => post.id === args.id);
    if (postIndex === -1) {
      throw new Error('Post not found');
    }
    // Use Array destructure
    const [deletedPost] = db.posts.splice(postIndex, 1);
    db.comments = db.comments.filter(comment => comment.post !== args.id);

    if (deletedPost.published) {
      pubSub.publish('post', {
        post: {
          mutation: 'DELETED',
          data: deletedPost
        }
      })
    }

    return deletedPost;
  },
  updatePost(parent, args, { db, pubSub }, info) {
    const { id, data } = args;
    const post = db.posts.find(post => post.id === id);
    if (!post) {
      throw new Error('Post not found');
    }
    const originalPost = { ...post };

    if (typeof data.title === 'string') {
      post.title = data.title;
    }
    if (typeof data.body === 'string') {
      post.body = data.body;
    }
    if (typeof data.published === 'boolean') {
      post.published = data.published;

      if (originalPost.published && !post.published) {
        // post deleted
        pubSub.publish('post', {
          post: 'DELETED',
          data: originalPost
        });
      } else if (!originalPost.published && post.published) {
        // post created
        pubSub.publish('post', {
          post: 'CREATED',
          data: post
        });
      }
    } else if (post.published) {
      // post updated
      pubSub.publish('post', {
        post: 'UPDATED',
        data: post
      });
    }
    return post;
  },
  createComment(parent, args, { db, pubSub }, info) {
    const userExisted = db.users.some(user => user.id === args.data.author);
    if (!userExisted) {
      throw new Error('User not found');
    }
    const postExisted = db.posts.some(post => post.id === args.data.post && post.published);
    if (!postExisted) {
      throw new Error('Invalid post');
    }
    const comment = {
      id: uuidv4(),
      ...args.data
    };
    db.comments.push(comment);
    pubSub.publish(`COMMENT_${args.data.post}`, { comment });
    return comment;
  },
  deleteComment(parent, args, { db }, info) {
    const commentIndex = db.comments.findIndex(comment => comment.id === args.id);
    if (commentIndex === -1) {
      throw new Error('Comment not found');
    }
    const deleteComments = db.comments.splice(commentIndex, 1);
    return deleteComments[0];
  },
  updateComment(parent, args, { db }, info) {
    const { id, data } = args;
    const comment = db.comments.find(comment => comment.id === id);
    if (!comment) {
      throw new Error('Comment not found');
    }
    if (typeof data.text === 'string') {
      comment.text = data.text;
    }
    return comment;
  }
};

export { Mutation as default };