export const loginUser = (username, images) => {
    return {
        type: 'USER_LOGIN',
        username: username,
        images: images
    };
};

export const logoutUser = () => {
    return {
        type: 'USER_LOGOUT'
    };
};