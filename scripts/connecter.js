const ssh = require("ssh2"),
  colors = require("colors");

class Connect {
  constructor(session) {
    this.session = session;

    this.client = new ssh.Client();
    this.connected = false;

    this.connect();
  }

  execCmd(cmd) {
    if (this.connected === false || !this.stream && cmd !== ' ' && cmd !== '\n') return;
    this.stream.write(cmd);
  }

  setupListener() {
    process.stdin.setEncoding("utf8");
    process.stdin.on('readable', () => {
      const chunk = process.stdin.read();
      if (!chunk) return;
      this.execCmd(chunk);
    })
  }

  handleError(chunk) {
    console.log(colors.red(`Error -- ${chunk}`));
  }

  handleDisconnect() {
    console.log(colors.red(`Client disconnected`));
  }

  handleResp(chunk) {
    console.log(chunk + '\n');
  }

  connect() {
    const connectOpts = {
      host: this.session.url.split("://")[1].split(":")[0],
      port: this.session.url.split(":")[2],
      username: this.session.username,
      password: this.session.password
    }
    const client = this.client;
    client.on('ready', () => {
        this.connected = true;
        this.setupListener();
        console.log('Client :: ready');
        client.shell((err, str) => {
          if (err) return this.handleError(err);
          this.stream = str;
          str.on('close', this.handleDisconnect)
            .on('data', this.handleResp)
            .stderr.on('data', this.handleError)
        })
      })
      .connect(connectOpts);
    console.log(JSON.stringify(connectOpts));
  }
}

module.exports = Connect;


// {
//   "_id": "f22ca99b-365a-4034-9fb1-60d47f06211c",
//   "username": "aa779719-8d59-4ea6-a7df-6d9ce21533cb",
//   "password": "JvicZaqootJ6iRBL2si6o5AmXXfeQKjxYPz/fxdcjs4=",
//   "name": "johnny-501",
//   "url": "tcp://0.tcp.ngrok.io:18539",
//   "session_id": "f22ca99b-365a-4034-9fb1-60d47f06211c",
//   "nick": ""
// }
