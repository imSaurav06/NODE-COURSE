const { prototype } = require('events');
const http = require('http');


const server = http.createServer((res,req)=>{
    console.log('function call');
});

const PORT = 3001;
server.listen(PORT , ()=>{
        console.log('successfull');
})
