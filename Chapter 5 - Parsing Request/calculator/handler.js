const handlerUI = (res,req)=>{

    console.log(req.url,req.method)
    if(req.url)
    res.setHeader('content-Type','text/html');
res.write(`
    
     <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Welcome to Calculator</h1>
          <a href="/calculator">Go To Calculator</a>
        </body>  
      <html> 

    `)
     return res.end();
}
