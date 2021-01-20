const express = require('express');
const router = express.Router();
import axios from 'axios';

router.get('/:query', (req, res) => {
    console.log('Search by string query');
    const resp = axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
        {
            headers: {
                "x-rapidapi-key": "da35f6c608msh371315fcdb593d4p1b5c6fjsn3071ffd8d513",
                "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
                "useQueryString": true
            },
            params: {
                "term": req.params.query,
                "country": "us"
            }
        }
    ).then((resp) => {
        res.send(resp.data);
    });
});

export default router;