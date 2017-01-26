const request = require("request-promise");

class API {
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
  getAllSessions() {
    return this._get('session/list');
  }
  update(session_id, key, value) {
    const data = { value, session_id, key }
    console.log(data);
    return this._post(`update/${key}`, data);
  }
}
export default new API();
