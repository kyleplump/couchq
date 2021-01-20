const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all watchlists')
});

router.get('/:id', (req, res) => {
    res.send('Get one watchlist')
});

router.post('/create', (req, res) => {
    res.send('Create one watchlist')
});

router.patch('/:id', (req, res) => {
    res.send('Update one watchlist')
});

router.delete('/:id', (req, res) => {
    res.send('Delete one watchlist')
});

export default router;