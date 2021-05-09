import { CREATE_ROUTE, LOGIN_ROUTE, USER_IMAGES_ROUTE, callAPI } from '../constants/APIConstants';

export const loginUser = (username, images) => {
    return {
        type: 'USER_LOGIN',
        payload: {
            username: username,
            images: images
        }
    };
};

export const logoutUser = () => {
    return {
        type: 'USER_LOGOUT'
    };
};

export const createUserAccount = (username) => (dispatch) => {
    return callAPI(CREATE_ROUTE, 'POST', {username: username}).then(response => {
        dispatch(loginUser(username, []));
        return [true, response.data];
    }).catch(err => {
        return [false, err.response.data];
    });
};

export const loginUserAccount = (username) => (dispatch) => {
    return callAPI(LOGIN_ROUTE, 'POST', {username: username}).then(trash => {
        return callAPI(USER_IMAGES_ROUTE, 'GET', {username: username}).then(response => {
            dispatch(loginUser(username, response.data));
            return [true, {msg: 'You have logged in successfully!'}];
        }).catch(err => {
            return [false, err.response.data];
        });
    }).catch(err => {
        return [false, err.response.data];
    });
};