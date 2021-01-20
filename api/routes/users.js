const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all users')
});

router.get('/:id', (req, res) => {
    res.send('Get one user')
});

router.post('/create', (req, res) => {
    res.send('Create one user')
});

router.patch('/:id', (req, res) => {
    res.send('Update one user')
});

router.delete('/:id', (req, res) => {
    res.send('Delete one user')
});

export default router;
