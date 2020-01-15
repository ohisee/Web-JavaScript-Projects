/**
 * @fileoverview Hash using Bcrypt
 */
import bcrypt from "bcryptjs";

async function hashPassword(textpw) {
  if (textpw.length < 8) {
    throw new Error("Password must be at least eight characters or longer");
  }
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(textpw, salt);
}

export default hashPassword;