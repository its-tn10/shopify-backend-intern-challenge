import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({images: imagesReducer, users: usersReducer});

export default rootReducer;