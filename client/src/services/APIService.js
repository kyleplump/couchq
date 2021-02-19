import axios from 'axios';
import { apiEndpoint } from '../constants';

export class APIService {
    
    search(searchTerm) {
        
        return new Promise((resolve, reject) => {

            // const encodedSearchTerm = encodeURIComponent(searchTerm);

            axios.get(`${apiEndpoint}/api/search/${searchTerm}`).then((resp) => {
                resolve(resp.data);
            });
        });
    }

    getWatchlist(userID) {

        return new Promise((resolve, reject) => {

            axios.get(`${apiEndpoint}/api/watchlists/${userID}`).then((resp) => {
                resolve(resp.data);
            })
        });
    }

    addItemToWatchlist(item) {
        
        return new Promise((resolve, reject) => {
            // axios.post(`${apiEndpoint}/api/watchlists/create`, { 'item': item }).then(() => {
            //     console.log("doe from here")
            // })

            axios.patch(`${apiEndpoint}/api/watchlists`, { 'userID': '123456789', item: item }).then(() => {
                console.log("doe from here")
            })
        });
    }   
}