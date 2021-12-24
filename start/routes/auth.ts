import Route from '@ioc:Adonis/Core/Route'

Route.post('/login', 'Auth/Main.store')
Route.delete('/login', 'Auth/Main.destroy').middleware('auth')
