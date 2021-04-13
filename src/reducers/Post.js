import { SET_POST, SET_CURRENTPAGE, SET_MAXPAGENUMLIMIT, SET_MINPAGENUMLIMIT } from '../actions/Post';

const postIntialState = {
    everyPost: [],
    pageNumbers: [],
    currentPage: 1,
    currentPosts: [],
    maxPageNumLimit: 10,
    minPageNumLimit: 0
}

const post = (state=postIntialState, action) => {
    switch(action.type) {
        case SET_POST:
            return Object.assign({}, state, {
                everyPost: action.everyPost,
                pageNumbers: [...action.everyPost.keys()].filter(e=>e%10===0).map(e=> e/10+1)
            })
        case SET_CURRENTPAGE:
            return Object.assign({}, state, {
                currentPage: action.currentPage,
                currentPosts: state.everyPost.slice(action.currentPage*10-10, action.currentPage*10),
            })
        case SET_MAXPAGENUMLIMIT:
            return Object.assign({}, state, {
                maxPageNumLimit: action.maxPageNumLimit
            })
        case SET_MINPAGENUMLIMIT:
            return Object.assign({}, state, {
                minPageNumLimit: action.minPageNumLimit
            })
        default:
            return state
    }
}

export default post;