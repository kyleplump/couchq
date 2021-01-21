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
}