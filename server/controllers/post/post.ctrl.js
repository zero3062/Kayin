const getConnection = require('../../models');

exports.get_notice = ( _ , res ) => {

    getConnection((connection) => {

        connection.query(`select post_id, title, date from post;`, function(err, rows) {
            if(err) {
                console.log({message: 'post is empty'});
                res.status(404).send({message: 'post is empty'});
            } else {
                console.log({message: 'post is filled'});
                console.log(rows);
                res.status(200).send(rows);
            }
        })

        connection.release();
    })

}

exports.get_noticeContent = ( req , res) => {

    getConnection((connection) => {

        connection.query(`select post_id, title, date, description from post where post_id = ${req.params.id};`, function(err, rows) {
            if(err) {
                console.log({message: 'post is empty'});
                res.status(404).send({message: 'post is empty'});
            } else {
                if(rows[0] == undefined) {
                    console.log({message: 'post is undefined'});
                    res.status(404).send({message: 'post is undefined'});
                } else {
                    console.log({message: 'post is filled'});
                    console.log(rows[0]);
                    res.status(200).send(rows[0]);
                }
            }
        })

        connection.release();
    })

}