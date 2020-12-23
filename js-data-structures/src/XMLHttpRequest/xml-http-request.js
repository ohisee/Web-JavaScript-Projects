/**
 * @fileoverview Http request using XML Http request 
 */

/**
 * class using XML Http Request 
 */
class HttpRequest {
  /**
   * @param {string} url 
   * @param {{[key:string]: string}} params
   * @returns {Promise<object>}
   */
  static fetchData(url, params) {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open("GET", url);
      http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
          const responseData = JSON.parse(http.responseText);
          resolve(responseData);
        } else if (http.readyState === XMLHttpRequest.DONE) {
          reject("Uable to fetch");
        }
      };
      http.send(new URLSearchParams(params));
    });
  }
}

export { HttpRequest };
