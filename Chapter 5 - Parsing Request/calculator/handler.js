const {sumRequestHandler}  = require("./sum");

const handlerUI = (res,req)=>{
  console.log(req.url,req.method);

  if(req.url === '/'){
    res.setHeader('content-Type','text/html');
    res.write(
      `
       res.write(
   <html>
    <head>
      <title>Practise Set</title>
    </head>

    <body>
       <h1>Welcome to Calculator</h1>
      <a href="/calculator">Go To Calculator</a>
    </body>
   </html>
  )
      `
    );
    return res.end();
  }

  else if(req.url.toLowerCase() === "/calculator"){

    res.setHeader(req.url, req.method);

    res.write(
      `<html>
        <head>
              <title>Practise Set</title>
        </head>
        <body>
              <h1>Here is the Calculator</h1>
              <form action="/calculate-result" method = "POST"> 
                <input type="text" placeholder="First Num" name="first"/>
                <input type="text" placeholder="second Num" name="second"/>
                <input type = "submit" value = "Sum"/>
              </form>

        </body>
        </html>
        `
      )
      return res.end();
  }

  else if(req.url.toLowerCase() === "/calculator-result" && req.method === 'POST')
      return sumRequestHandler(req,res);





    // other wise
    
    res.setHeader('Content-Type', 'text/html');
      res.write(`
        <html>
          <head><title>Practise Set</title></head>
          <body>
            <h1>404 Page Does not Exist</h1>
            <a href="/">Go To Home</a>
          </body>  
        <html>  
      `);    
      return res.end();



}


module.exports.handlerUI = handlerUI;



// const handlerUI = (res,req)=>{

//     console.log(req.url,req.method)
//     if(req.url)
//     res.setHeader('content-Type','text/html');
// res.write(`
    
//      <html>
//         <head><title>Practise Set</title></head>
//         <body>
//           <h1>Welcome to Calculator</h1>
//           <a href="/calculator">Go To Calculator</a>
//         </body>  
//       <html> 

//     `)
//      return res.end();
// }
