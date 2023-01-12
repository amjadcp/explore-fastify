// 'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

module.exports = async function (fastify, opts) {
  
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })
  fastify.someSupport()
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: {prefix: '/api/v1'}, opts
  })
  console.log(process.env.PORT);
}
