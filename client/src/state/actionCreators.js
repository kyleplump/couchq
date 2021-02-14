import { SET_ACTIVE_MEDIA_ITEM } from './actionTypes';

export function setActiveMediaItem(itemID) {
    return {
        type: SET_ACTIVE_MEDIA_ITEM,
        itemID,
    }
}