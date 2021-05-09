import { DELETE_ROUTE, GALLERY_ROUTE, UPLOAD_ROUTE, callAPI } from '../constants/APIConstants';
import { loginUser } from './usersActions';

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

export const deleteImage = (imageId, username) => (dispatch) => {
    let fd = new FormData();
    fd.append('files', imageId);
    fd.append('username', username);

    console.log(fd, imageId, username);

    return callAPI(DELETE_ROUTE, 'POST', fd).then(response => {
        dispatch(loginUser(username, response.data));
        return [true, ""];
    }).catch(err => {
        return [false, err.response.data];
    });
};