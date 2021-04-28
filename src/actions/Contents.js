export const SET_NOTICE = 'SET_NOTICE';
export const SET_WORK = 'SET_WORK';
export const SET_MINE = 'SET_MINE';

export const setNotice = (title, description, date) => {
    return {
        type: SET_NOTICE,
        title: title,
        description: description,
        date: date
    }
}

export const setWork = (title, description, date, user, image_file) => {
    return {
        type: SET_WORK,
        title: title,
        description: description,
        date: date,
        user: user,
        image_file: image_file
    }
}

export const setMine = (id) => {
    return {
        type: SET_MINE,
        id
    }
}