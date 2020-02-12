var express = require('express');

var server = express();

server.get('/', (Request, Response) => {
    Response.send('Hello World!');
});

server.listen(3333);