const request = require('request');

const api = function () {
  return new Promise(function (resolve, reject) {
    request({
      method: 'GET',
      uri: 'http://localhost:3000',
      json: true,
      headers: {
        authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YmQ5MGM5MGYxY2ZhMDI3MzQ0NmY4NTEiLCJpYXQiOjE1NDA5NTExODQ5MTN9.00dnkJpPUylVTwSRvv1EID4Gz3mdGRGQZmIcaGG_SuI'
      },
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