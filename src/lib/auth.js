import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' });
}
export function verifyToken(token) {
  try { return jwt.verify(token, JWT_SECRET); } catch { return null; }
}
export function validateAdmin(id, password) {
  return id === process.env.ADMIN_ID && password === process.env.ADMIN_PASSWORD;
}
