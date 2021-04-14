export const SET_TEXT = 'SET_TEXT';
export const SET_IMAGEINFO = 'SET_IMAGEINFO';

export const setText = (title, description) => {
    return {
        type: SET_TEXT,
        title: title,
        description: description
    }
}

export const setImageInfo = (image_info) => {
    return {
        type: SET_IMAGEINFO,
        image_info: image_info
    }
}