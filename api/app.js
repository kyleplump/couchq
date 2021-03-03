const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyParser = require('body-parser');

import usersRoutes from './routes/users';
import watchlistsRoutes from './routes/watchlists';
import searchRoutes from './routes/search';
import authRoutes from './routes/auth';

import authMiddleware from './middlware/auth';

async function startServer() {

    try {
        await mongoose.connect('mongodb://localhost/couchq', {useNewUrlParser: true, useUnifiedTopology: true});

        const db = mongoose.connection;
    
        const app = express();
        const port = 3001;

        var corsOptions = {
            origin: 'https://localhost:3000',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        } 
        app.use(cors(corsOptions));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        
        app.use('/auth', authRoutes);
        app.use('/api/users', authMiddleware, usersRoutes);
        app.use('/api/watchlists', authMiddleware, watchlistsRoutes);
        app.use('/api/search', authMiddleware, searchRoutes);

        app.listen(port, () => {
            console.log('Server Started')
        });
    }
    catch (err) {
        console.log('errored', err)
    }
}

startServer();

