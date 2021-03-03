const express = require('express');
const router = express.Router();
import { generateSignedToken } from '../helpers/jwtHelper';
import { User } from '../models/user';

router.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ 'email': email }, (error, doc) => {

        if(error) {
            res.status(401).send('User not found.');
        }

        if(doc.password !== password) {
            res.status(401).send('Incorrect Email / Password.');
        }

        const token = generateSignedToken(email);

        res.json(token);
    })

   
});

export default router;
