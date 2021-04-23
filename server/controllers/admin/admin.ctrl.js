const getConnection = require('../../models');

exports.get_admin = (req, res) => {
    getConnection((connection) => {
        connection.query(`select work_id, title, user_id, date, access from work;`, function(err, rows) {
            if(err) {
                console.log({message: 'work is exist so insert failed'});
                res.status(404).send({message: 'work is exist so insert failed'});
            } else {
                console.log({message: 'insert success'});
                res.status(200).send({rows});
            }
        })

        connection.release();
    });
}

exports.get_adminContent = (req, res) => {
    getConnection((connection) => {
        connection.query(`select work_id, title, description, image_file, user_id, date from work where work_id = ${req.params.id};`, function(err, rows) {
            if(err) {
                console.log({message: 'work is empty'});
                res.status(404).send({message: 'work is empty'});
            } else {
                if(rows[0] == undefined) {
                    console.log({message: 'work is undefined'});
                    res.status(404).send({message: 'work is undefined'});
                } else {
                    console.log({message: 'work is filled'});
                    res.status(200).send(rows[0]);
                }
            }
        })

        connection.release();
    });
}

exports.post_publish = (req, res) => {
    getConnection((connection) => {
        console.log(req.params.id);
        connection.query(`update work set access=true where work_id=${req.params.id}`, function(err) {
            if(!err) {
                console.log({message: 'reset access : success'});
                res.status(200).send();
            } else {
                console.log({message: 'id is not exist'});
                res.status(404).send({message: 'id is not exist'});
            }
        })

        connection.release();
    });
}

exports.post_work = (req, res) => {
}
