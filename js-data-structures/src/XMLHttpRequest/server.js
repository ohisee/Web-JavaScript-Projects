/**
 * @fileoverview Http server 
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

/**
 * render file for browser
 * @param {string} name it is file name 
 * @param {string} type it is content type, "text/html",  "text/javascript", "text/css" 
 * @param {http.ServerResponse} response 
 */
const renderFile = (name, type, response) => {
  fs.readFile(path.join(__dirname, name), (error, data) => {
    if (error) {
      response.writeHead(500);
    } else {
      response.setHeader("Content-Type", type);
      response.write(data);
    }
    return response.end();
  });
};

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/favicon.ico') {
    res.writeHead(200, { "Conten-Type": "image/x-icon" });
    return res.end();
  } else if (url === "/") {
    return renderFile("index.html", "text/html", res);
  } else if (url === "/index.js") {
    return renderFile("index.js", "text/javascript", res);
  } else if (url === "/xml-http-request") {
    return renderFile("xml-http-request.js", "text/javascript", res);
  } else {
    res.writeHead(404, "see you again", { "Conten-Type": "text/html; charset=utf-8" });
    res.write("<html><head><meta charset='utf-8'></head>");
    res.write("<body><h2>resource not available</h2></body></html>");
    return res.end();
  }
});

server.listen(3100, () => {
  console.log("up and running at port 3100");
});
