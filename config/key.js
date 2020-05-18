// key.js -figure out what set credentials to return
if (process.env.NODE_ENV == 'production') {
  // we are in the production - return the prod set of keys
  module.exports = require('./prd');
} else {
  //we are in development - return the dev keys!!
  module.exports = require('./dev');
}
