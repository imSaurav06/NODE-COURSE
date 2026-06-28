const http = require('http');


function requestListener(request,response){
  console.log('request')
}

const server = http.createServer(requestListener);
 
// server.listen(5003);
const PORT = 5003;
server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`)
})



// or



http.createServer(function requestListener(request,response){
  console.log('request')
});


// or


http.createServer((request,response)=>{
  console.log('request')
});

