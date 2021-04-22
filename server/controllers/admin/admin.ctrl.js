const getConnection = require('../../models');

exports.get_work = (req, res) => {
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

exports.get_workContent = (req, res) => {

}

exports.post_work = (req, res) => {
}
