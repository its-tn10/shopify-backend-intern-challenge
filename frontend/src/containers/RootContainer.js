import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { getImages } from '../actions/imagesActions';
import { loginUser, logoutUser } from '../actions/usersActions';

import App from '../components/App';

export default connect()(App);