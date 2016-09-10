const fs = require('fs')
const glob = require('glob-fs')();
const path = require('path')

var handler = function(e) {
  process.nextTick(() => {
    throw e
  })
}

module.exports = function(usrHandler) {
  var files = glob.readdirSync('./node_modules/**/(promise|es6-promise)/package.json')

  files.forEach((file) => {
    const pkg = require(path.resolve('./',file))
    switch(pkg.name) {
      case 'es6-promise':
        var x = require(path.resolve(path.parse(file).dir))
        
        break
      case 'promise':
        require(path.resolve(path.parse(file).dir,'lib','rejection-tracking')).enable(
          {
            allRejections: true,
            onUnhandled: function(id, e) {
              process.nextTick(function() {
                (usrHandler) ? usrHandler(e) : handler(e)
              })
            }
          }
        )
        break
    }
  })

  process.on('unhandledRejection', function(e) {
    process.nextTick(function() {
      (usrHandler) ? usrHandler(e) : handler(e)
    })
  })
}
