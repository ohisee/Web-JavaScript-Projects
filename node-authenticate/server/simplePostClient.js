const request = require('request');

const api = function () {
  return new Promise(function (resolve, reject) {
    request({
      method: 'POST',
      uri: 'http://localhost:3000/signin',
      json: true,
      body: {
        email: 'running@person.com',
        password: 'washing_machine'
      }
    }, function (error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(response.body);
      }
    });
  });
};

api().then(function (res) {
  console.log(res);
}).catch(function (err) {
  console.log(err);
});
