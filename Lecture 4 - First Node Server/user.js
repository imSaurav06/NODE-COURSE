const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  console.log(request.url, request.method, request.headers);

  if (request.url === '/') {
    response.setHeader('Content-Type', 'text/html');

    response.write('<html>');
    response.write('<head><title>Complete Coding</title></head>');
    response.write('<body><h1>Enter Your Details:</h1>');
    response.write('<form action="/submit-details" method="POST">');
    response.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    response.write('<label for="male">Male</label>');
    response.write('<input type="radio" id="male" name="gender" value="male">');
    response.write('<label for="female">Female</label>');
    response.write('<input type="radio" id="female" name="gender" value="female">');
    response.write('<br><input type="submit" value="Submit">');
    response.write('</form>');
    response.write('</body>');
    response.write('</html>');

    return response.end(); // ✅ Fixed
  }

  if (
    request.url.toLowerCase() === '/submit-details' &&
    request.method === 'POST'
  ) {
    fs.writeFileSync('user.txt', 'Prashant Jain');

    response.statusCode = 302;
    response.setHeader('Location', '/');

    return response.end(); // ✅ Fixed
  }

  response.setHeader('Content-Type', 'text/html');
  response.write('<html>');
  response.write('<head><title>Complete Coding</title></head>');
  response.write('<body><h1>Like / Share / Subscribe</h1></body>');
  response.write('</html>');
  response.end();
  return;
});

const PORT = 5003;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});