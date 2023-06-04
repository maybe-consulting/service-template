import { init, server } from './app'

init()
  .then(() => {
    server.listen({ port: 8080 }, () => {
      console.log('Listening at http://localhost:8080')
    })
  })
  .catch(console.error)
