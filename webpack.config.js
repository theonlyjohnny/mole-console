'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['local', 'prod', "dev"];

// Set the correct environment
let env;
if (args.env) {
  env = args.env;
} else {
  env = 'local';
}
process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  let isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  let validEnv = isValid ? wantedEnv : 'local';
  let config = require(path.join(__dirname, 'cfg/' + validEnv));
  console.log(`Running w/ ${validEnv} config`);
  return config;
}

module.exports = buildConfig(env);
