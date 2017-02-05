const config = {
  local: {
    adminKey: 'dxr8AYUy27P3WnTV',
    api: 'localhost:8080'
  },
  prod: {
    adminKey: "B4z39jv5ZpgYVr2M",
    api: 'https://mole-api.herokuapp.com'
  }
}


module.exports = config[process.env.NODE_ENV || "prod"];
