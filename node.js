'use strict';

/**
 * ### Server-side
 * #### For Node
 * @module server
 * @example
 * module.exports = require('begin-linting/node');
 */
module.exports = {
  env: {
    node: true,
  },
  rules: {
    'global-require': 'error',
    // TODO: remove once async/await is implemented in Node LTS
    'require-yield': 0,
    'func-names': 0,
  },
};
