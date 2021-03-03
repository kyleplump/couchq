import { CACHE_WATCHLIST } from '../actionTypes';

const initialState = {
    watchlist: [],
}


export default function watchlist(state = initialState, action) {

    switch(action.type) {

        case CACHE_WATCHLIST:
            return { ...state, watchlist: action.payload.watchlist };

        default: 
            return state;
    }
}