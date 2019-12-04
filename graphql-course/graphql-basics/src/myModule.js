/**
 * Named export - Has a name, have as many as needed
 */
const message = 'Some message from module.js';

const name = 'Person Person';

const id = 'Person Id';

/**
 * Default export - Has no name, can only have one
 */
const location = 'San Mateo';

const getGreeting = (name) => {
  return `Welcome to the course ${name}`;
};

export { message, name, id, getGreeting, location as default };