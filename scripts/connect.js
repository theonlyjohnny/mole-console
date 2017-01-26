const yargs = require("yargs")
  .usage('Usage: $0 [session_id || name]')
  .demandOption(['s'])
  .argv,
  API = require("./api.js"),
  connect = require("./connecter.js"),
  colors = require("colors"),
  identifier = yargs['s'];

console.log(colors.green(`Searching for '${identifier}' session...`));
API.getSession(identifier).then((res) => {
  if (res) {
    console.log(colors.green(`Found '${identifier}' session!`));
    const session = new connect(res);
  } else {
    console.log(colors.red(`Could not find '${identifier}'`));
    process.exit(0);
  }
})
