import { SET_AUTH } from '../actions/Auth';

const authIntialState = {
    auth: false,
    admin: false
}

const auth = (state=authIntialState, action) => {
    switch(action.type) {
        case SET_AUTH:
            return Object.assign({}, state, {
                auth: action.auth,
                admin: action.admin
            })
        default:
            return state
    }
}

export default auth;