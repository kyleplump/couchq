export default class AuthService {

    _instance;
    _TOKEN_NAME = '_couchq_auth_token';

    static getInstance() {

        if(!this._instance) {
            this._instance = new AuthService();
        }

        return this._instance;
    }

    getJWT() {

        const storage = window.localStorage;
        const jwt = storage.getItem(this._TOKEN_NAME);

        return jwt;
    }

    setJWT(token) {

        return new Promise((resolve, reject) => {

            const storage = window.localStorage;
            storage.setItem(this._TOKEN_NAME, token);
            resolve();
        });
        
    }
}