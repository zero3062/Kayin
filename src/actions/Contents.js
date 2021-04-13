export const SET_NOTICE = 'SET_NOTICE';

export const setNotice = (title, description, date) => {
    return {
        type: SET_NOTICE,
        title: title,
        description: description,
        date: date
    }
}