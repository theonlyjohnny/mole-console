'use strict';

import baseConfig from './base';

let config = {
  env: 'dev',
  API: 'https://api.mylo-dev.co'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
