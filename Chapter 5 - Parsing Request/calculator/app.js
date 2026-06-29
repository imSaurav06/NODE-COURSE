const http = require('http');
const handlerUI = require('./user.js')

const server = http.createServer(handlerUI);

const PORT = 3001;
server.litsen(3001, ()=>{
        console.log(`Server running on address http://localhost:&{PORT}`);

})





















// const http = require('http');

// const handlerUI = require('./user')

// const server = http.createServer(handlerUI);

// server.listen(PORT, ()=>{
//     console.log(`Server running on address http://localhost:&{PORT}`);
// })