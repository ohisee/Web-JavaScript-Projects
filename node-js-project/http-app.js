/**
 * @fileoverview Node.js http app
 */
const http = require('http');
const Url = require('url');
const queryHandler = require('./http-req');

const server = http.createServer((req, res) => {
  const url = req.url;
  const query = Url.parse(url, true).query;
  if (url === '/favicon.ico') {
    res.writeHead(200, { "Conten-Type": "image/x-icon" });
    return res.end();
  }
  if (query.q) {
    return queryHandler(query.q).then(results => {
      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>First Page</title></head>');
      res.write('<body><h3>Hello from Node.js Server</h3><table>');
      for (const property in results) {
        let key = results[property].key;
        let value = results[property].value;
        res.write(`<tr><td>${key}</td><td>${value}</td></tr>`);
      }
      res.write('</table></body></html>');
      res.end();
    }).catch(err => {
      res.end();
    });
  }
  res.end();
});

server.listen(3000);
