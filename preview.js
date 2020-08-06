const express = require('express');
const apiMocker = require('connect-api-mocker');
const path = require('path');

const app = express();

app.use(apiMocker('/api', path.resolve(__dirname, '/api')));
app.use(express.static(path.resolve(__dirname, '/build')));

app.listen(8080);