const getConnection = require('../../models');
const dotenv = require('dotenv');
let jwt = require("jsonwebtoken");

dotenv.config();

exports.post_signup = ( req, res ) => {

    getConnection((connection) => {
        connection.query(`insert ignore into user (id, password, admin) values('${req.body.user_id}', '${req.body.password}', false);`, function(err, rows) {
            if(err) {
                console.log({message: 'user is exist so insert failed'});
                res.status(404).send({message: 'user is exist so insert failed'});
            } else {
                console.log({message: 'insert success'});
                res.status(200).send();
            }
        })

        connection.release();
    })

}

exports.post_signin = async(req, res) => {

    getConnection((connection) => {

        connection.query(`select user_id, password, admin from user where id = '${req.body.user_id}';`, function(err, result) {
            if(!err) {
                if(result[0].password == req.body.password) {
                    const refreshToken = jwt.sign({},
                        process.env.JWT_SECRET, {
                        expiresIn: '14d',
                        issuer: 'kayin'
                    });

                    connection.query(`select user_id from token where user_id = ${result[0].user_id}`, function(err, result2) {
                        if(err) {
                            connection.query(`replace into token (user_id, content) values(${result[0].user_id}, '${refreshToken}');`, function(err, result1) {
                                if(err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            connection.query(`insert into token (user_id, content) values(${result[0].user_id}, '${refreshToken}');`, function(err, result1) {
                                if(err) {
                                    console.log(err);
                                }
                            });
                        }
                    })
                    
                    

                    const accessToken = jwt.sign({
                        id: req.body.user_id
                    },
                    process.env.JWT_SECRET, {
                        expiresIn: '1h',
                        issuer: 'kayin'
                    });

                    res.cookie('accessToken', accessToken);
                    res.cookie('refreshToken', refreshToken);
                    res.json({
                        accessToken : accessToken,
                        refreshToken: refreshToken
                    })

                    if(result[0].admin) {
                        res.status(200).send({admin: true});
                    } 
                } else {
                    console.log({message: 'password is not correct'});
                    res.status(404).send({message: 'password is not correct'});
                }
            } else {
                console.log({message: 'id is not exist'});
                res.status(404).send({message: 'id is not exist'});
            }
        })

        connection.release();
    })
}

exports.post_forgot = (req, res) => {

    getConnection((connection) => {

        connection.query(`update user set password='${req.body.password}' where id='${req.body.user_id}' and admin=false;`, function(err) {
            if(!err) {
                console.log({message: 'reset password : success'});
                res.status(200).send();
            } else {
                console.log({message: 'id is not exist'});
                res.status(404).send({message: 'id is not exist'});
            }
        })

        connection.release();
    })
}

exports.get_read = (req, res) => {
    res.send({message:'asdf'});
}