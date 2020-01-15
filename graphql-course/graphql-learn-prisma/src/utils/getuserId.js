/**
 * @fileoverview Get user id
 */
import jwt from "jsonwebtoken";

/**
 * Get user Id
 * @param {*} req 
 * @param {*} requireAuth 
 * @param {*} connection
 */
function getUserId(req, requireAuth = true, connection = undefined) {
  const authorization = req ? req.headers.authorization :
    (connection ? connection.context.Authorization : null);

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
