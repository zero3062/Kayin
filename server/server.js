const express = require('express');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(cors());
app.use(fileUpload());
app.use( '/images', express.static('./server/images'));

app.use(require('./controllers'));

const port = 8080;
app.listen(port, ()=>console.log(`Listening on port ${port}`));