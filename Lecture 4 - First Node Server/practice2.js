const http = require('http')

function func(req,res){
console.log("successfully🟩")
}

const server = http.createServer((req,res)=>{
console.log(req.url,req.method);
if (req.url==='/home') {
  <h>welcome to the home</h>
}
else if(req.url==='/home'){
 <h>welcome to the home</h>
}
else if(req.url==='/home'){
 <h>welcome to the home</h>
}

else if(req.url==='/home'){

}

else
res.write(
  <html>
    <head>
     <tital>MYNTRA</tital>
    </head>

    <body>
    <head>
      <nav>
        <ul>
          <li><a href="/home"></a>Home</li>
          <li><a href="/men"></a>MEn</li>
          <li><a href="/womwn"></a>women</li>
          <li><a href="/homekid"></a>kid</li>
          <li><a href="/cart"></a>cart</li>
        </ul>
      </nav>
    </head>
    </body>
  </html>
)
});

const PORT = 5003;
server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`)
})