/**
 * @fileoverview Get user id
 */
import jwt from "jsonwebtoken";

/**
 * Get user Id
 * @param {*} req 
 * @param {*} requireAuth 
 */
function getUserId(req, requireAuth = true) {
  const authorization = req.headers.authorization;

  if (authorization) {
    // const token = authorization.replace('Bearer ', '');
    const [, token] = authorization.split(/\s+/);
    if (token) {
      const decoded = jwt.verify(token, 'thisisasecret');
      return decoded.userId;
    }
  }

  if (requireAuth) {
    throw new Error('Authentication required');
  }

  return null;
}

export default getUserId;