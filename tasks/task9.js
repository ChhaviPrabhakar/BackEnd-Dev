const http = require('http');
const routes = require('./routes'); //u can aslo use ./routes.js bcz nodeJs automatically attach it in d end.

const server = http.createServer(routes.handler);

server.listen(3000);