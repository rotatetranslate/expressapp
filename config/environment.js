var _ = require('lodash');

var localEnvVars = {
  TITLE:      'expressapp',
  SAFE_TITLE: 'expressapp'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
