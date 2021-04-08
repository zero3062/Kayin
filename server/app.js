const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

class App {
    constructor() {
        this.app = express();
        this.setMiddleWare();
        this.getRouting();
    }

    setMiddleWare() {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
    }

    getRouting (){
        this.app.use(require('./controllers'))
    }
}

module.exports = new App().app;