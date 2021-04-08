const getConnection = require('../../models');

exports.post_signup = ( req, res ) => {

    let select = 0;

    getConnection((connection) => {
        connection.query(`select id from user;`, function(err, rows) {
            if(!err) {
                for(let i=0; i<rows.length;i++) {
                    if(rows[i].id == req.body.id) {
                        select++;
                        console.log({message: 'this id is exist'});
                    }
                }
            } else {
                console.log({message: 'select failed'});
                res.send({message: 'select failed'});
            }
        })

        if(select == 0) {
            console.log({select: select});
            connection.query(`insert into user (id, pw, admin) values('${req.body.id}', '${req.body.pw}', false);`, function(err, rows) {
                if(err) {
                    console.log({message: err});
                    console.log({message: 'insert failed'});
                    res.send({message: 'insert failed'});
                } else {
                    console.log({message: 'insert success'});
                    res.send({message: 'insert success'})
                }
            })
        }

        connection.release();
    })

}

exports.post_signin = (req, res) => {

    getConnection((connection) => {

        connection.query(`select pw, admin from user where id = '${req.body.id}';`, function(err, result) {
            if(!err) {
                console.log(result);
                if(result[0].pw == req.body.pw) {
                    if(result[0].admin) {
                        res.send({admin: true, acess: true});
                    } else {
                        res.send({admin: false, acess: true});
                    }
                } else {
                    console.log({message: 'pw is not correct'});
                    res.send({message: 'pw is not correct'}); 
                }
            } else {
                console.log({message: 'id is not exist'});
                res.send({message: 'id is not exist'});
            }
        })

        connection.release();
    })
}

exports.post_forgot = (req, res) => {

    getConnection((connection) => {

        connection.query(`update user set pw = '${req.body.pw}' where id='${req.body.id}' and admin=false;`, function(err) {
            if(!err) {
                console.log({message: 'forgot=>reset pw: success'});
                res.send({forgot: true});
            } else {
                console.log({message: 'id is not exist'});
                res.send({message: 'id is not exist'});
            }
        }) 

        connection.release();
    })
}