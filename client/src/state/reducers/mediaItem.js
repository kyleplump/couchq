import { SET_ACTIVE_MEDIA_ITEM } from '../actionTypes';

const initialState = {
    mediaItem: null
}

export default function (state = initialState, action) {

    switch(action.type) {

        case SET_ACTIVE_MEDIA_ITEM: 
            break;
        default: 
            return state;
            break;
    }
}