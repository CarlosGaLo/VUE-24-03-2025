import { createServer, Model } from 'miragejs'

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      // Define tus modelos de datos aquí, si los hubiera
      user: Model,
      tweet: Model
    },

    seeds(server) {
      //Creo los datos falsos de mi base de datos. (De mi back).
      server.create('user', { name: 'Jarko Garrido' })
      server.create('user', { name: 'Elisabetta Scinto' })
      server.create('user', { name: 'Valentina Chimento' })
      server.create('tweet', { message: 'mock message', timestamp: 'xx-xx-xxxx' })
    },

    routes() {
      this.namespace = 'api'

      this.get('/users', (schema) => {
        return schema.users.all()
      })

      this.get('/tweets', (schema) => {
        return schema.tweets.all()
      })
    }
  })

  return server
}
