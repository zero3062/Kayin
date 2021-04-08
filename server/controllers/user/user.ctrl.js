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