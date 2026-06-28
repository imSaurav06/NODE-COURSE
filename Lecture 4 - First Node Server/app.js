const http = require('http');


function requestListener(request,response){
  console.log(request.url ,request.method,request.headers);




  if(request.url === '/product'){
     response.setHeader('content-text','texthtml');
  response.write('<html>');
  response.write('<head><tital>The Indian Space Research Organisation (ISRO</tital></head>');
  response.write('<body><h1>CISRO has an official logo since 2002. It consists of an or</h1></body>');
  response.write('</html>');
  response.end();
  return;

  }
  else if(request.url === '/about'){
     response.setHeader('content-text','texthtml');
  response.write('<html>');
  response.write('<head><tital>Complete NodeJS + ExpressJS + </tital></head>');
  response.write('<body><h1>Complete NodeJS + ExpressJS + </h1></body>');
  response.write('</html>');
  return response.end();

  }
  else{

    response.setHeader('content-text','texthtml');
    response.write('<html>');
    response.write('<head><tital>Organisation structure and facilities</tital></head>');
    response.write('<body><h1>Complete NodeJS + ExpressJS + </h1></body>');
    response.write('</html>');
     response.end();
  }
}

const server = http.createServer(requestListener);
 
// server.listen(5003);
const PORT = 5003;
server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`)
})