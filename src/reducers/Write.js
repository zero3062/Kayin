import { SET_TEXT, SET_IMAGEINFO } from '../actions/Write';

const writeIntialState = {
    title: '',
    description: '',
    image_info: '',
    image_name: ''
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
                image_name: action.image_info.name
            })
        default:
            return state
    }
}

export default write;