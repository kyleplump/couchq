const express = require('express');
const router = express.Router();
import { Watchlist } from '../models/watchlist';

router.get('/', (req, res) => {
    res.send('Get all watchlists')
});

router.get('/:userID', (req, res) => {
    console.log('Get a Watchlist based on User ID');

    Watchlist.findOne({ 'user': '123456789' }, (err, doc) => {
        if(doc) {
            res.send(doc.items);
        }
    });
});

router.post('/create', (req, res) => {
    console.log('Create one watchlist', req.body )
    

    Watchlist.create({ 
        'user': '123456789',
        'id': '600880f0f3af21e880ed31c5',
        'items': [ req.body.item ]
    }).then(() => {
        res.send('success')

    });

});

router.patch('', (req, res) => {
    console.log('update watchlist based on user id')

    Watchlist.findOne({ 'user': req.body.userID }, (err, doc) => {
        console.log('found!: ', req.body.item)
        if(doc) {
            doc.items.push(req.body.item);
        }

        console.log("new one: ", doc);
        Watchlist.updateOne({ 'user': req.body.userID }, doc).then(() => {
            res.send("success")
        })
    })
});

router.delete('/:id', (req, res) => {
    res.send('Delete one watchlist')
});

export default router;