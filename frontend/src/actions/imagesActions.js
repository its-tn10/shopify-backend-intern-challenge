import { UPLOAD_ROUTE, callAPI } from '../constants/APIConstants';

export const getImages = ( images) => {
    return {
        type: 'GET_IMAGES',
        images: images
    };
};

export const uploadImages = (images) => (dispatch) => {
    return callAPI(UPLOAD_ROUTE, 'POST', images).then(response => {
        return [true, response.data];
    }).catch(err => {
        return [false, err.response.data];
    });
};