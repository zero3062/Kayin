export const SET_AUTH = 'SET_AUTH';

export const setAuth = (auth, admin) => {
    return {
        type: SET_AUTH,
        auth: auth,
        admin: admin
    }
}