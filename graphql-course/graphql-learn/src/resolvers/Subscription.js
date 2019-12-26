/**
 * @fileoverview Resolver's subscription
 */

const CHANNEL_NAME = "count";
const Subscription = {

  // Keep for reference
  count: {
    subscribe(parent, args, { pubSub }, info) {
      let incrementor = 0;

      let timeoutId = setInterval(() => {
        incrementor = incrementor + 1;
        pubSub.publish(CHANNEL_NAME, {
          count: incrementor
        });
        if (incrementor > 1) {
          clearInterval(timeoutId);
        }
      }, 1000);

      return pubSub.asyncIterator(CHANNEL_NAME);
    }
  },

  comment: {
    subscribe(parent, { postId }, { db, pubSub }, info) {
      const post = db.posts.find(post => post.id === postId && post.published);
      if (!post) {
        throw new Error('Post not found');
      }
      return pubSub.asyncIterator(`comment ${postId}`);
    }
  },

  post: {
    subscribe(parent, args, { pubSub }, info) {
      return pubSub.asyncIterator('post');
    }
  },

};

export default Subscription;