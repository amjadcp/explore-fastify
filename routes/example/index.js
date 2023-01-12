'use strict'

module.exports = async function (fastify, opts) {
  
  fastify.get('/:a',{
    schema:{
      params: {
        type: 'object',
        properties: {
          a: {type: 'number'}
        }
      }
    }
  }, async function (request, reply) {
    return request.params
  })
  fastify.get('/a', async function (request, reply) {
    return opts
  })
}