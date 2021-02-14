const express = require('express');
const router = express.Router();
import { Watchlist } from '../models/watchlist';

router.get('/', (req, res) => {
    res.send('Get all watchlists')
});

router.get('/:id', (req, res) => {
    res.send('Get one watchlist')
});

router.post('/create', (req, res) => {
    console.log('Create one watchlist', req.body )
    

    Watchlist.create({ 
        'id': '600880f0f3af21e880ed31c5',
        'items': [ req.body.item ]
    }).then(() => {
        res.send('success')

    });

});

router.patch('/:id', (req, res) => {
    res.send('Update one watchlist')
});

router.delete('/:id', (req, res) => {
    res.send('Delete one watchlist')
});

export default router;