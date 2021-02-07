export default class RequestMemoizer {

    constructor() {
        this.instance;
        this.map = new Map();
    }

    static getInstance() {
        
        if(this.instance === undefined) {
            this.instance = new RequestMemoizer();
        }

        return this.instance;
    }

    isRequestMemoed(query) {

        if(this.map.size === 0) {

            return false;
        }

        else {

            return this.map.has(query);
        }
    }

    getMemoedRequest(query) {

        return this.map.get(query);
    }

    cacheRequest(query, data) {

        this.map.set(query, data);
    }

}