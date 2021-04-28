import { SET_NOTICE, SET_WORK, SET_MINE } from '../actions/Contents';

const contentsIntialState = {
    title: '',
    description: '',
    date: '',
    user: '',
    image_file: '',
    mine: false
}

const contents = (state=contentsIntialState, action) => {
    switch(action.type) {
        case SET_NOTICE:
            return Object.assign({}, state, {
                title: action.title,
                description: action.description,
                date: action.date
            })
        case SET_WORK:
            return Object.assign({}, state, {
                title: action.title,
                description: action.description,
                date: action.date,
                user: action.user,
                image_file: action.image_file
            })
        case SET_MINE:
            return Object.assign({}, state, {
                mine: action.id === state.user ? true : false
            })
        default:
            return state
    }
}

export default contents;