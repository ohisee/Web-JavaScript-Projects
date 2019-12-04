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
  published: false,
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

const db = {
  users,
  posts,
  comments,
};

export { db as default };