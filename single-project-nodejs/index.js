const { join } = require('path')
const moduleAlias = require('module-alias')

moduleAlias.addAlias('~', join(__dirname, 'lib'))

moduleAlias()

require('./lib')
