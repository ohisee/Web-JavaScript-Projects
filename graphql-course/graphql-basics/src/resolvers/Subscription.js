//
// Subscription
// 
const COMMENT_CHANNE_NAME = 'COMMENT_';
const POST_CHANNE_NAME = 'post';
const Subscription = {
  comment: {
    subscribe(parent, args, { db, pubSub }, info) {
      const { postId } = args;
      const post = db.posts.find(post => post.id == postId && post.published);
      if (!post) {
        throw new Error('Post not found');
      }
      return pubSub.asyncIterator(`${COMMENT_CHANNE_NAME}${postId}`);
    }
  },
  post: {
    subscribe(parent, args, { pubSub }, info) {
      return pubSub.asyncIterator(POST_CHANNE_NAME);
    }
  }
};

export { Subscription as default };

/**
  type Subscription {
    count: Int!
  }
  const COUNT_CHANNEL_NAME = 'count';
  count: {
    subscribe(parent, args, { pubSub }, info) {
      let count = 0;
      setInterval(() => {
        count = count + 1;
        pubSub.publish(COUNT_CHANNEL_NAME, {
          count: count
        });
      }, 1000);
      return pubSub.asyncIterator(COUNT_CHANNEL_NAME);
    }
  },
 */
