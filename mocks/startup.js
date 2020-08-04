const express = require('express');
const apiMocker = require('connect-api-mocker');

const app = express();

app.use(apiMocker('/api','mocks/api'));

app.listen(8000);