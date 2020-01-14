/**
 * @fileoverview This is another module
 */
// Name export
const message = "message from another module";
const name = "Person Person";
const getGreeting = (name) => {
  return `welcome to this class, ${name}`;
};

// Default export
const location = 'Greater Bay Area';

export {message, name, getGreeting, location as default};
