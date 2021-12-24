import Route from '@ioc:Adonis/Core/Route'

import './products'

Route.get('/', async () => {
  return { hello: 'world' }
})
