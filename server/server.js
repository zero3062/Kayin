const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(require('./controllers'));

const port = 8080;
app.listen(port, ()=>console.log(`Listening on port ${port}`));