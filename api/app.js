const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import usersRoutes from './routes/users';
import watchlistsRoutes from './routes/watchlists';
import searchRoutes from './routes/search';

async function startServer() {

    try {
        await mongoose.connect('mongodb://localhost/couchq', {useNewUrlParser: true, useUnifiedTopology: true});

        const db = mongoose.connection;
    
        const app = express();
        const port = 3001;

        var corsOptions = {
            origin: 'http://localhost:3000',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
        } 
        app.use(cors(corsOptions));
        
        app.use('/api/users', usersRoutes);
        app.use('/api/watchlists', watchlistsRoutes);
        app.use('/api/search', searchRoutes);

        app.listen(port, () => {
            console.log('Server Started')
        });
    }
    catch (err) {
        console.log('errored', err)
    }
}

startServer();

