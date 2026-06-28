const http = require('http');

const handlerUI = require('./user')

const server = http.createServer(handlerUI);

server.listen(PORT, ()=>{
    console.log(`Server running on address http://localhost:&{PORT}`);
})