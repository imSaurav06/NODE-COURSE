const http = require('http');

function xyz(req,res){
  console.log('kumar')

}

const server = http.createServer(xyz);
const PORT = 3000;
server.listen(PORT,()=>{
  console.log(`server running on address http://localhost:&{PORT}`)
})