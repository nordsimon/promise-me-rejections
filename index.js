if(process && process.env && process.env.NODE_ENV === 'production') {
  console.error('This package should not run in production. Be advised')
}
module.exports = require('./src/node')
