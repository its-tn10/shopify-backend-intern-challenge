import { GALLERY_ROUTE, UPLOAD_ROUTE, callAPI } from '../constants/APIConstants';

export const getImages = ( images) => {
    return {
        type: 'GET_IMAGES',
        payload: {images: images}
    };
};

export const getGallery = () => (dispatch) => {
    return callAPI(GALLERY_ROUTE, 'GET').then(response => {
        dispatch(getImages(response.data))
    }).catch(err => {
        dispatch(getImages([]))
    });
}

export const uploadImages = (images) => (dispatch) => {
    return callAPI(UPLOAD_ROUTE, 'POST', images).then(response => {
        return [true, response.data];
    }).catch(err => {
        return [false, err.response.data];
    });
};