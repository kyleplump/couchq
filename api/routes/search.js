const express = require('express');
const router = express.Router();
import axios from 'axios';
import { API_KEYS } from '../config';

router.get('/:query', (req, res) => {
    console.log('Search by string query');
    const resp = axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
        {
            headers: {
                "x-rapidapi-key": API_KEYS.UTELLY.KEY,
                "x-rapidapi-host": API_KEYS.UTELLY.HOST,
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