const {verifyToken} = require('../utils/jwt');

module.exports = {
    async checkTokens(req, res, next) {
        console.log(req.cookies);
        if(req.cookies.accessToken == undefined) throw Error('You don\'t have the API Access');
        
        const accessToken = verifyToken(req.cookies.accessToken);
        const refreshToken = verifyToken(req.cookies.refreshToken);

        if(accessToken == null) {
            if(refreshToken == null) 
                throw Error('You don\'t have the API Access');
            else {
                const newAccessToken = jwt.sign({userId, userName}, 
                    process.env.JWT_SECRET, {
                    expiresIn: '14d',
                    issuer: 'kayin'
                });
                res.cookie('accessToken', newAccessToken);
                req.cookies.accessToken = newAccessToken;
                next();
            }
        } else {
            if(refreshToken == null) {
                const newRefreshToken = jwt.sign({}, 
                    process.env.JWT_SECRET, {
                    expiresIn: '1h',
                    issuer: 'kayin'
                });
                res.cookie('refreshToken', newRefreshToken);
                req.cookies.refreshToken = newRefreshToken;
                next();
            } else {
                next();
            }
        }
    },
    async checkUser(req, res, next) {
        const accessToken = verifyToken(req.cookies.accessToken);
        const refreshToken = verifyToken(req.cookies.refreshToken);
        return accessToken, refreshToken;
    }
}