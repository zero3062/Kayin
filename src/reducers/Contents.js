import { SET_NOTICE } from '../actions/Contents';

const contentsIntialState = {
    title: '',
    description: '',
    date: ''
}

const contents = (state=contentsIntialState, action) => {
    switch(action.type) {
        case SET_NOTICE:
            return Object.assign({}, state, {
                title: action.title,
                description: action.description,
                date: action.date
            })
        default:
            return state
    }
}

export default contents;