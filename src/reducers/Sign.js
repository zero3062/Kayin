import { SET_SIGN } from '../actions/Sign';

const signIntialState = {
    userId: '',
    userPw: ''
}

const sign = (state=signIntialState, action) => {
    switch(action.type) {
        case SET_SIGN:
            return Object.assign({}, state, {
                userId: action.userId,
                userPw: action.userPw
            })
        default:
            return state
    }
}

export default sign;