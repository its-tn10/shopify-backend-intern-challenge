import axios from 'axios';

const API_URL = 'http://18.207.149.129:5000';

// ******************    USER ROUTES    ****************** //

export const USER_ROUTE = `${API_URL}/user`;
export const LOGIN_ROUTE = `${USER_ROUTE}/login`;
export const LOGOUT_ROUTE = `${USER_ROUTE}/logout`;
export const CREATE_ROUTE = `${USER_ROUTE}/create`;
export const USER_IMAGES_ROUTE = `${USER_ROUTE}/images`;

// ******************    UTIL FUNCTIONS    ****************** //

export const callAPI = (URL, method, data) => {
    if (method == 'POST') {
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