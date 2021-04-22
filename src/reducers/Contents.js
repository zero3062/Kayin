import { SET_NOTICE, SET_WORK } from '../actions/Contents';

const contentsIntialState = {
    title: '',
    description: '',
    date: '',
    user: '',
    image_file: '',
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
        default:
            return state
    }
}

export default contents;