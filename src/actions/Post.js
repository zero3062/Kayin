export const SET_POST = 'SET_POST';
export const SET_CURRENTPAGE = 'SET_CURRENTPAGE';

export const setPost = (everyPost) => {
    return {
        type: SET_POST,
        everyPost: everyPost
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENTPAGE,
        currentPage: currentPage
    }
}
