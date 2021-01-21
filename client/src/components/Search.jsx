import { React, useState, useEffect } from 'react';
import {APIService} from '../services/APIService';

let apiService = null;

function performSearch(term) {

    apiService.search(term).then((resp) => {
        console.log("done", resp)
    })
}

export default function Search() {

    useEffect(() => {
        // intialize the service only once
        apiService = new APIService();
    }, []);

    const [ searchTerm, updateSearchTerm ] = useState('');

    return (
        <div>
            <input type="text" onChange={(e) => updateSearchTerm(e.target.value) } />
            <button onClick={() => performSearch(searchTerm)} >Search!</button>
        </div>
    );
}