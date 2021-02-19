'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return { hello: 'world' }
  })
  // fastify.listen(process.env.PORT, '0.0.0.0', (err, address) => {
  //   if (err) throw err
  //   fastify.log.info(`server listening on ${address}`)
  // })
}
