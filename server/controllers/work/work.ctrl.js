const getConnection = require('../../models');

exports.get_work = (req, res) => {
    getConnection((connection) => {
        connection.query(`select work_id, title, description, image_file from work;`, function(err, rows) {
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

    getConnection((connection) => {
        if (!req.files)
            return res.status(400).send('No files were uploaded.');

        var file = req.files.photo;
        var img_name=file.name;

        console.log(req.files.photo);

        file.mv('./server/images/'+img_name, function(err) {
            if (err)
                return res.status(500).send(err);
            
            const regex = /\s/gm;
            var replace_img = img_name.replace(regex, '%20');

            connection.query(`insert ignore into work (title, description, image_file) values('${req.body.title}', '${req.body.description}' , 'http://10.156.145.178:8080/images/${replace_img}');`, function(err, rows) {
                if(err) {
                    console.log({message: 'work is exist so insert failed'});
                    res.status(404).send({message: 'work is exist so insert failed'});
                } else {
                    console.log({message: 'insert success'});
                    res.status(200).send({message: 'insert success'});
                }
            })

            connection.release();
        })
    })
}