import axios from 'axios';

const API_URL = 'http://shopify-backend.tientavu.com';

// ******************    USER ROUTES    ****************** //

export const USER_ROUTE = `${API_URL}/user`;
export const LOGIN_ROUTE = `${USER_ROUTE}/login`;
export const LOGOUT_ROUTE = `${USER_ROUTE}/logout`;
export const CREATE_ROUTE = `${USER_ROUTE}/create`;
export const USER_IMAGES_ROUTE = `${USER_ROUTE}/images`;

// ******************    IMAGE ROUTES    ****************** //

export const IMAGE_ROUTE = `${API_URL}/image`;
export const UPLOAD_ROUTE = `${IMAGE_ROUTE}/upload`;
export const DELETE_ROUTE = `${IMAGE_ROUTE}/delete`;
export const GALLERY_ROUTE = `${IMAGE_ROUTE}/gallery`;
export const VIEW_ROUTE = `${IMAGE_ROUTE}/view`;

// ******************    UTIL FUNCTIONS    ****************** //

export const callAPI = (URL, method, data) => {
    if (method === 'POST') {
        return axios({
            url: URL,
            method: method,
            data: data
        });
    }
    return axios({
        url: URL,
        method: method,
        params: data
    });
};