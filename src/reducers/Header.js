import { SET_HEADER, SET_MENUBAR } from '../actions/Header';

const headerIntialState = {
    option: 0,
    menubar: false
}

const header = (state=headerIntialState, action) => {
    switch(action.type) {
        case SET_HEADER:
            return Object.assign({}, state, {
                option: action.option
            })
        case SET_MENUBAR:
            return Object.assign({}, state, {
                menubar: action.menubar
            })
        default:
            return state
    }
}

export default header;