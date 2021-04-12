import { combineReducers } from 'redux';
import auth from './Auth';
import header from './Header';
import sign from './Sign';
import post from './Post';

const reducerApp = combineReducers({
    auth,
    header,
    sign,
    post
})


export default reducerApp;