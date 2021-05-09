import React from 'react';
import { connect } from 'react-redux';

import { getGallery, uploadImages, deleteImage } from '../actions/imagesActions';
import { createUserAccount, loginUserAccount, logoutUser } from '../actions/usersActions';

import App from '../components/App';

const mapStateToProps = state => {
    return {
        username: state.users.username,
        user_images: state.users.images,
        images: state.images.images,
        curr_image: state.images.curr_img
    };
};

export default connect(mapStateToProps, { createUserAccount, loginUserAccount, logoutUser, getGallery, uploadImages, deleteImage })(App);