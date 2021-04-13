import { combineReducers } from 'redux';
import auth from './Auth';
import header from './Header';
import sign from './Sign';
import post from './Post';
import contents from './Contents';

const reducerApp = combineReducers({
    auth,
    header,
    sign,
    post,
    contents
})


export default reducerApp;