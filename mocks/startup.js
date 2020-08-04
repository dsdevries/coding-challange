const http = require('http');
const connect = require('connect');
const apiMocker = require('connect-api-mocker');

const app = connect();

app.use(apiMocker('/api','mocks/api'));

http.createServer(app).listen(8000);