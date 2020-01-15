/**
 * @fileoverview Generate JWT token
 */
import jwt from "jsonwebtoken";

function generateToken(userId) {
  return jwt.sign({ userId: userId }, '', { expiresIn: '1 day' });
}

export default generateToken