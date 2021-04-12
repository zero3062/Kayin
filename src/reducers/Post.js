import { SET_POST, SET_CURRENTPAGE } from '../actions/Post';

const postIntialState = {
    everyPost: [],
    currentPage: 1,
    currentPosts: [],
}

const post = (state=postIntialState, action) => {
    switch(action.type) {
        case SET_POST:
            return Object.assign({}, state, {
                everyPost: action.everyPost
            })
        case SET_CURRENTPAGE:
            return Object.assign({}, state, {
                currentPage: action.currentPage,
                currentPosts: state.everyPost.slice(action.currentPage*10-10, action.currentPage*10),
            })
        default:
            return state
    }
}

export default post;