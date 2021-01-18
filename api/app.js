const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/couchq', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.once('open', () => {
    console.log('connected')
});

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log('Server Started')
})

// const resp = axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
//     {
//         headers: {
//             "x-rapidapi-key": "da35f6c608msh371315fcdb593d4p1b5c6fjsn3071ffd8d513",
//             "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
//             "useQueryString": true
//         },
//         params: {
//             "term": "arrival",
//             "country": "us"
//         }
//     }
// ).then((resp) => console.log('RESP: ', resp.data.results[0]));


