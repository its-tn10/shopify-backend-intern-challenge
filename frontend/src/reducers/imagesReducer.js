import initialState from './initialState';

export default function imagesReducer(state = initialState.images, action) {
    switch (action.type) {
        case 'GET_IMAGES': {
            return {
                ...state,
                images: action.payload.images,
                curr_img: null
            };
        }

        default:
            return state;
    }
};