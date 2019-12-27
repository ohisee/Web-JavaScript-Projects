/**
 * @fileoverview Routes
 */
const fs = require('fs');

function requestHandler(req, res) {
  // console.log(req.url, req.method, req.headers);
  // process.exit();
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    res.write('<h3>Enter message</h3>');
    res.write('<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const requestBody = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      requestBody.push(chunk);
    });
    return req.on('end', () => {
      const parseBody = Buffer.concat(requestBody).toString();
      console.log(parseBody);
      const message = parseBody.split('=')[1];
      fs.writeFile('message.txt', message, (error) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>First Page</title></head>');
  res.write('<body><h3>Hello from Node.js Server</h3></body>');
  res.write('</html>');
  res.end();
}

module.exports = {
  handler: requestHandler,
  someText: "some text here",
};

// Or
// module.exports.handler = requestHandler;
// module.exports.someText = "some text here";

// Or
// exports.handler = requestHandler;
// exports.someText = "some text here";
