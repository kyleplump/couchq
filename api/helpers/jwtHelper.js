import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';

export function generateSignedToken(email) {

    return jwt.sign(email, TOKEN_SECRET, {});
}