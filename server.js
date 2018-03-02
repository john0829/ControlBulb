const express = require('express');
const http = require('http');
const SwitchServer = require('./server/SwitchServer.js');
var SwitchRouter = express.Router();
new SwitchServer(SwitchRouter);


var app = express();
app.use('/switch', SwitchRouter);
app.use(express.static('public'));
app.listen(80);