import { SET_ACTIVE_MEDIA_ITEM } from '../actionTypes';

const initialState = {
    mediaItemID: null,
    mediaItem: null
}

export default function (state = initialState, action) {

    switch(action.type) {

        case SET_ACTIVE_MEDIA_ITEM: 
            console.log('ACTION: ', action);
            const { itemID, item } = action.payload;
            return {
                ...state,
                mediaItemID: itemID,
                mediaItem: item
            };

            break;
        default: 
            return state;
            break;
    }
}