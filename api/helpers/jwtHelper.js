import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';

export function generateSignedToken(email) {
    // todo dont user email, use mogno user id
    return jwt.sign(email, TOKEN_SECRET, {});
}