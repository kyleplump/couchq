import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config';

export default function (req, res, next) {

    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        // todo error
    }

    const token = authHeader.split(' ')[1];

    if(!token) {
        // todo error
    }

    jwt.verify(token, TOKEN_SECRET, (error, user) => {

        if(error) {
            // todo error
        }

        console.log("user: ", user);
        next();
    })
}