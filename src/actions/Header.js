export const SET_HEADER = 'SET_HEADER';
export const SET_MENUBAR = 'SET_MENUBAR';

export const setHeader = (option) => {
    return {
        type: SET_HEADER,
        option: option
    }
}

export const setMenubar = (menubar) => {
    return {
        type: SET_MENUBAR,
        menubar: menubar
    }
}