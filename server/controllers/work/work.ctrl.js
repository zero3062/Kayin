const getConnection = require('../../models');

exports.get_work = (req, res) => {

}

exports.get_workContent = (req, res) => {

}

exports.post_work = (req, res) => {

    getConnection((connection) => {
        connection.query(`insert ignore into work (title, description) values('${req.body.title}', '${req.body.description}');`, function(err, rows) {
            if(err) {
                console.log({message: 'work is exist so insert failed'});
                res.status(404).send({message: 'work is exist so insert failed'});
            } else {
                console.log(req);
                console.log({message: 'insert success'});
                res.status(200).send({message: `${req}`});
            }
        })

        connection.release();
    })

}