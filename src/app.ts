import createApolloServer from './graphql/server'
import express from 'express'
import { expressMiddleware } from '@apollo/server/express4';
import http from 'http'
import cors from 'cors'

const app = express();

const httpServer = http.createServer(app)

export async function init() {
  app.use(
    cors(),
    express.json({ limit: '50mb' })
  )
  
  /* Apollo Server Setup */
  const apolloServer = createApolloServer(httpServer)
  await apolloServer.start()
  app.use(expressMiddleware(apolloServer, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }))
}

export default app

export {
  httpServer as server
}
