const { useLayoutEffect } = require('react');
const getConnection = require('../../models');

exports.post_signup = ( req, res ) => {

    getConnection((connection) => {
        connection.query(`insert ignore into user (user_id, password, admin) values('${req.body.user_id}', '${req.body.password}', false);`, function(err, rows) {
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

exports.post_signin = (req, res) => {

    getConnection((connection) => {

        connection.query(`select password, admin from user where user_id = '${req.body.user_id}';`, function(err, result) {
            if(!err) {
                if(result[0].password == req.body.password) {
                    if(result[0].admin) {
                        res.status(200).send({admin: true});
                    } else {
                        res.status(200).send({admin: false});
                    }
                } else {
                    console.log({message: 'password is not correct'});
                    res.status(404).send({message: 'password is not correct'}); 
                }
            } else {
                console.log({message: 'user_id is not exist'});
                res.status(404).send({message: 'user_id is not exist'});
            }
        })

        connection.release();
    })
}

exports.post_forgot = (req, res) => {

    getConnection((connection) => {

        connection.query(`update user set password='${req.body.password}' where user_id='${req.body.user_id}' and admin=false;`, function(err) {
            if(!err) {
                console.log({message: 'reset password : success'});
                res.status(200).send();
            } else {
                console.log({message: 'user_id is not exist'});
                res.status(404).send({message: 'user_id is not exist'});
            }
        }) 

        connection.release();
    })
}