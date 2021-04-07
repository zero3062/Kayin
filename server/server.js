const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/api', api);

const port = 8080;
app.listen(port, ()=>console.log(`Listening on port ${port}`));