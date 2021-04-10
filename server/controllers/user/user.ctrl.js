const getConnection = require('../../models');

exports.post_signup = ( req, res ) => {

    getConnection((connection) => {

        connection.query(`insert ignore into user (id, pw, admin) values('${req.body.id}', '${req.body.pw}', false);`, function(err, rows) {
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

        connection.query(`select pw, admin from user where id = '${req.body.id}';`, function(err, result) {
            if(!err) {
                if(result[0].pw == req.body.pw) {
                    if(result[0].admin) {
                        res.status(200).send({admin: true});
                    } else {
                        res.status(200).send({admin: false});
                    }
                } else {
                    console.log({message: 'pw is not correct'});
                    res.status(404).send({message: 'pw is not correct'}); 
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

        connection.query(`update user set pw = '${req.body.pw}' where id='${req.body.id}' and admin=false;`, function(err) {
            if(!err) {
                console.log({message: 'reset pw: success'});
                res.status(200).send();
            } else {
                console.log({message: 'id is not exist'});
                res.status(404).send({message: 'id is not exist'});
            }
        }) 

        connection.release();
    })
}