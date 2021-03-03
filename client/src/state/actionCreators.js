import { 
    SET_ACTIVE_MEDIA_ITEM,
    CACHE_WATCHLIST,
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
