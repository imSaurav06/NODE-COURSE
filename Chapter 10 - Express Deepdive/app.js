const express = require('express');

const app = express();

app.use((req, res, next)=>
{
  console.log("first Dummy middleware", req.url , req.method);
  next();

})
app.use((req, res, next)=>
{
  console.log("second Dummy middleware", req.url , req.method);
  next();

})
// app.use((req, res, next)=>
// {
//   console.log("third Dummy middleware", req.url , req.method);
//   res.send(`<p>whelcome to the HTML Part</p>`);
  

// })
app.get('/',(req, res, next)=>
{
  console.log("fourth Dummy middleware", req.url , req.method);
  res.send(`<p>Handling /GET</p>`);
  

});


app.get('/contact-us',(req, res, next)=>
{
  console.log("fourth Dummy middleware", req.url , req.method);
  res.send(`<p>Please give your contact detail now here</p>
    
    <form action="/contact-us" method="post">
    <input type="text" name="username">
    <input type="email" name="email">
    <button type="submit">Submit</button>
    </form>

  `);
})  

app.post('/contact-us',(req, res, next)=>
{
  console.log("fourth Dummy middleware", req.url , req.method);
  res.send(`<p>thank you for  give your contact detail now here</p> `);  
  

});

const PORT = 3001;
app.listen(PORT , ()=>{
  console.log(`server created successfully on : `);
  console.log(`http://localhost:${PORT}`);
});