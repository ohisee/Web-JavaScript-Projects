/**
 * @fileoverview Node.js http request
 */
const http = require('http');

const queryHandler = (query) => {
  const promise = new Promise((resolve, reject) => {
    const q = query;
    const req = http.request({
      hostname: "example.domain.com",
      path: `/path?query=${q}&lang=en`,
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }, (res) => {
      const chunks = [];
      res.on('data', chunk => {
        chunks.push(chunk);
      });
      res.on('end', () => {
        const message = Buffer.concat(chunks).toString();
        const json = JSON.parse(message);
        const results = json["ResultSet"]['Result'];
        const jsonRep = [];
        for (const property in results) {
          jsonRep.push({
            key: results[property]['symbol'],
            value: results[property]['name'],
          });
        }
        // const jsonRep = JSON.stringify(json, null, 2);
        resolve(jsonRep);
      });
    });
    req.on('error', (err) => {
      reject(err);
    });
    req.end();
  });
  return promise;
};

module.exports = queryHandler;
