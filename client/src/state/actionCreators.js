import { SET_ACTIVE_MEDIA_ITEM } from './actionTypes';

export function setActiveMediaItem(itemID, item) {
    return {
        type: SET_ACTIVE_MEDIA_ITEM,
        payload: {
            itemID,
            item,
        }
    }
}
