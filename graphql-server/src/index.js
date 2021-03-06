import bodyParser from 'body-parser'
import graphqlExpress from 'express-graphql'
import graphiqlExpress from 'express-graphiql-toolbox'
import jwtExpress from 'express-jwt'
import { maskErrors } from 'graphql-errors'

import schema from './graphql/schema'
import { createPool, pooled } from './database/pool'

export default function addGraphQLServer(app, config) {
  maskErrors(schema)

  const jsonMiddleware = bodyParser.json()

  const jwtMiddleware = jwtExpress({
    secret: config.auth.secret,
    credentialsRequired: false
  })

  const gqlMiddleware = graphqlExpress(({user}) => ({
    schema,
    context: {
      pooled: pooled(createPool(config.rethinkdb)),
      config,
      user, // is set by express-jwt
    },
  }))

  app.set('json spaces', 2)

  app.post('/api', jwtMiddleware, jsonMiddleware, gqlMiddleware)

  app.get('/explore', graphiqlExpress({ endpoint: '/api' }))

  return app
}
