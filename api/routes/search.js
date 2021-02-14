const express = require('express');
const router = express.Router();
import axios from 'axios';
import { API_KEYS } from '../config';
import RequestMemoizer from '../helpers/requestMemoizer';

const memo = RequestMemoizer.getInstance();

router.get('/:query', (req, res, next) => {

    if(memo.isRequestMemoed(req.params.query)) {
        res.send(memo.getMemoedRequest(req.params.query));
    }
    else {
        next();
    }
},
async (req, res) => {
    console.log('Search by string query');

    try {

        let mediaData;

        const mediaMeta = await axios.get("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
            {
                headers: {
                    "x-rapidapi-key": API_KEYS.KEY,
                    "x-rapidapi-host": API_KEYS.UTELLY.HOST,
                    "useQueryString": true
                },
                params: {
                    "term": req.params.query,
                    "country": "us"
                }
            }
        );

        if(mediaMeta.data.hasOwnProperty('results') && mediaMeta.data.results.length > 0) {

            mediaData = mediaMeta.data.results;

            mediaData = await Promise.all(mediaData.map(async (result, index) => {

                if(result.external_ids.hasOwnProperty('imdb')) {

                    const details = await fetchDetails(result.external_ids.imdb.id);
                  
                    result['details'] = details;
                }

                return result;
            }));

            memo.cacheRequest(req.params.query, mediaData);

            res.send(mediaData);

        }
        else {
            // todo no res found
            console.log('not found results', mediaMeta.hasOwnProperty('results'))
            console.log('length: ', mediaMeta.results.length > 0)
        }
    }
    catch(err) {
        console.error("ERROR FETCHING", err)
    }
});

async function fetchDetails(imdbID) {

    let details = [];

    try {
        details = await axios.get("https://movie-database-imdb-alternative.p.rapidapi.com/",
            {
                headers: {
                    "x-rapidapi-key": API_KEYS.KEY,
                    "x-rapidapi-host": API_KEYS.IMDB.HOST,
                    "useQueryString": true
                },
                params: {
                    "i": imdbID,
	                "r": "json"
                }
            }
        );

        // console.log('got details', details);
        return details.data;
    }
    catch (error) {
        console.error("ERROR GETTING DETAILS", error)
    }
}

export default router;