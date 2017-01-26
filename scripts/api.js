const request = require("request-promise");

class _API {
  constructor() {
    this.adminKey = 'dxr8AYUy27P3WnTV';
    this.apiUrl = 'http://localhost:8080'
  }
  _post(url, data) {
    const opts = {
      url: this.apiUrl + `/${url}`,
      method: 'POST',
      json: true,
      body: data,
      headers: {
        'X-Admin-Key': this.adminKey
      }
    }
    return request(opts);
  }
  _get(url) {
    const opts = {
      url: this.apiUrl + `/${url}`,
      method: "GET",
      json: true,
      headers: {
        'X-Admin-Key': this.adminKey
      }
    }
    return request(opts);
  }
  getSession(pKey) {
    return this._get(`session/${pKey}`);
  }
}

module.exports = new _API();
