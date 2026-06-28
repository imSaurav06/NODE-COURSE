const http = require('http')

function func(req,res){
console.log("successfully🟩")
}

const server = http.createServer((req,res)=>{
console.log(req.url,req.method);

if (req.url==='/home') {
  res.write(`<h>welcome to the home</h>`);
  return res.end();
}
else if(req.url==='/men'){
 res.write(`<h>welcome to the men</h>`);
 return res.end();
}
else if(req.url==='/women'){
 res.write(`<h>welcome to the women</h>`);
 return res.end();
}

else if(req.url==='/kid'){
 res.write(`<h>welcome to the kid</h>`);
 return res.end();
}
else if(req.url==='/cart'){
 res.write(`<h>welcome to the Cart</h>`);
 return res.end();
}

else
res.write(`
  <html>
    <head>
     <tital>MYNTRA</tital>
    </head>

    <body>
    <head>
      <nav>
        <ul>
          <li><a href="/home">Home<</a>/li>
          <li><a href="/men">MEn</a></li>
          <li><a href="/womwn">women</a></li>
          <li><a href="/homekid">kid</a></li>
          <li><a href="/cart">cart</a></li>
        </ul>
      </nav>
    </head>
    </body>
  </html>`
);
return res.end();
});

const PORT = 5003;
server.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`)
})