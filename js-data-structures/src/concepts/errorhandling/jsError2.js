/**
 * @fileoverview JavaScript extend Error
 *
 */

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
    this.title = "traveling";
  }
}

class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "PermissionError";
    this.message = "regenerated error message";
  }
}

(function () {
  try {
    throw new AuthenticationError("extended error");
  } catch (err) {
    console.log(err.title, "--- should print traveling");
  }
})();

(function () {
  try {
    throw new PermissionError("some error");
  } catch (err) {
    console.log(err.message, "--- should print regenerated error message");
  }
})();
