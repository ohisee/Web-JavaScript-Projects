/**
 * @fileoverview database related
 */
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

const db = {
  users, posts, comments
};

export { db as default };
