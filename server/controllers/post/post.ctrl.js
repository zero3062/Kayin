const getConnection = require('../../models');

exports.get_notice = ( _, res ) => {

    getConnection((connection) => {

        connection.query(`select post_id, title, date from post`, function(err, rows) {
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