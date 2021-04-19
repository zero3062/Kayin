import { SET_TEXT, SET_IMAGEINFO } from '../actions/Write';

const writeIntialState = {
    title: '',
    description: '',
    image_info: '',
}

const write = (state=writeIntialState, action) => {
    switch(action.type) {
        case SET_TEXT:
            return Object.assign({}, state, {
                title: action.title,
                description: action.description
            })
        case SET_IMAGEINFO:
            return Object.assign({}, state, {
                image_info: action.image_info,
            })
        default:
            return state
    }
}

export default write;