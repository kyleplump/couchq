const express = require('express');
const router = express.Router();
import { User } from '../models/user';

router.get('/', (req, res) => {
    console.log('Get all users')

    User.find({}, (err, users) => {
        res.send(users);
        
    });
});

router.get('/:id', (req, res) => {
    console.log('Get one user')
});

router.post('/create', (req, res) => {
    console.log('Create one user')
});

router.patch('/:id', (req, res) => {
    console.log('Update one user')
});

router.delete('/:id', (req, res) => {
    console.log('Delete one user')
});

export default router;
