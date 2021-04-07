import { combineReducers } from 'redux';
import auth from './Auth';
import header from './Header';
import sign from './Sign';

const reducerApp = combineReducers({
    auth,
    header,
    sign
})


export default reducerApp;