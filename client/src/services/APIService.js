import axios from 'axios';
import { apiEndpoint } from '../constants';
import { getWatchlist } from '../state/selectors';

export class APIService {

    login(email, password) {

        return new Promise((resolve, reject) => {
            axios.post(`${apiEndpoint}/auth/login`, { 'email': email, 'password': password}).then((resp) => {
                console.log('got back from login: ', resp.data);
            });
        });
    }
    
    search(searchTerm) {
        
        return new Promise((resolve, reject) => {

            // const encodedSearchTerm = encodeURIComponent(searchTerm);

            const config = {
                headers: {
                    'Authorization': 'Bearer 12345',
                }
            }
            axios.get(`${apiEndpoint}/api/search/${searchTerm}`, config).then((resp) => {
                resolve(resp.data);
            });
        });
    }

    getWatchlist(userID) {

        return new Promise((resolve, reject) => {

            const config = {
                headers: {
                    'Authorization': 'Bearer 12345',
                }
            }
            axios.get(`${apiEndpoint}/api/watchlists/${userID}`, config).then((resp) => {
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