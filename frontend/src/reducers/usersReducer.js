import initialState from './initialState';

export default function usersReducer(state = initialState.user, action) {
    switch (action.type) {
        case 'USER_LOGIN': {
            return {
                ...state,
                username: action.payload.username,
                images: action.payload.images
            };
        }

        case 'USER_LOGOUT': {
            return {
                ...state, 
                username: null,
                images: []
            };
        }

        default:
            return state;
    }
};