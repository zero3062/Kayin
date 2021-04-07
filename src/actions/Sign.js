export const SET_SIGN = 'SET_SIGN';

export const setSign = (userId, userPw) => {
    return {
        type: SET_SIGN,
        userId: userId,
        userPw: userPw
    }
}