import { SET_HEADER } from '../actions/Header';

const headerIntialState = {
    option: 0
}

const header = (state=headerIntialState, action) => {
    switch(action.type) {
        case SET_HEADER:
            return Object.assign({}, state, {
                option: action.option
            })
        default:
            return state
    }
}

export default header;