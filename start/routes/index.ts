import Route from '@ioc:Adonis/Core/Route'

import './products'
import './auth'

Route.get('/', async () => {
  return { hello: 'world' }
})
