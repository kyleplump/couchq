import { SET_AUTH_TOKEN, SET_IS_AUTHENTICATED } from '../actionTypes';

const initialState = {
    isAuthenticated: false,
    authToken: null,
}

export default function (state = initialState, action) {

    switch(action.type) {

        case SET_IS_AUTHENTICATED: {
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated
            }
        }

        case SET_AUTH_TOKEN: {
            return {
                ...state,
                // setting an auth token sets this to true by default
                isAuthenticated: true,
                authToken: action.payload.token,
            }
        }

        default: {
            return state;
        }
    }
}