import { 
    SET_ACTIVE_MEDIA_ITEM,
    CACHE_WATCHLIST,
    SET_IS_AUTHENTICATED,
    SET_AUTH_TOKEN
} from './actionTypes';

export function setActiveMediaItem(itemID, item) {
    return {
        type: SET_ACTIVE_MEDIA_ITEM,
        payload: {
            itemID,
            item,
        }
    }
}

export function cacheWatchlist(watchlist) {
    return {
        type: CACHE_WATCHLIST,
        payload: {
            watchlist
        }
    }
}

export function setIsAuthenticated(isAuthenticated) {
    return {
        type: SET_IS_AUTHENTICATED,
        payload: {
            isAuthenticated
        }
    }
}

export function setAuthToken(token) {
    return {
        type: SET_AUTH_TOKEN,
        payload: {
            token
        }
    }
}
