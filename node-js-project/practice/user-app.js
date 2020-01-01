/**
 * @fileoverview Practice Node.js http
 */
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  res.write("<html><head><title>Practice Node.js</title></head>");
  if (url === '/') {
    res.write("<body><h3>Greetings</h3>");
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Send</button></form>');
    res.write("</body></html>");
    return res.end();
  } else if (url === '/users') {
    res.write("<body><ul>");
    for (let i = 1; i <= 10; i++) {
      res.write(`<li>User ${i}</li>`);
    }
    res.write("</ul></body></html>");
    return res.end()
  } else if (url === '/create-user' && req.method === 'POST') {
    const requestBody = [];
    req.on('data', (chunk) => {
      requestBody.push(chunk);
    });
    return req.on('end', () => {
      const parseBody = Buffer.concat(requestBody).toString();
      const username = parseBody.split('=')[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      res.end();
    });
  }
  res.end();
});

server.listen(3000);
