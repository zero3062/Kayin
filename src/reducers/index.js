import { combineReducers } from 'redux';
import auth from './Auth';
import header from './Header';
import sign from './Sign';
import post from './Post';
import contents from './Contents';
import write from './Write';

const reducerApp = combineReducers({
    auth,
    header,
    sign,
    post,
    contents,
    write
})


export default reducerApp;