const http = require('http')

function func(req,res){
console.log("successfully🟩")
}

const server = http.createServer((req,res)=>{
console.log(req.url,req.method);

if (req.url==='/home') {
  res.write(`<h>welcome to the home</h>`)
}
else if(req.url==='/men'){
 res.write(`<h>welcome to the men</h>`)
}
else if(req.url==='/women'){
 res.write(`<h>welcome to the women</h>`)
}

else if(req.url==='/kid'){
 res.write(`<h>welcome to the kid</h>`)
}
else if(req.url==='/cart'){
 res.write(`<h>welcome to the Cart</h>`)
}

else
res.write(
  `<html>
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
  </html>`
)
});

const PORT = 5003;
server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`)
})