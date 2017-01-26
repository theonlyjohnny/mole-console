'use strict';

import baseConfig from './base';

let config = {
  env: 'prod',
  API: "https://api.itsmylo.io"
};

export default Object.freeze(Object.assign({}, baseConfig, config));
